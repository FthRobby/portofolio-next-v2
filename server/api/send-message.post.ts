export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    setResponseStatus(event, 405)
    return {
      error: true,
      url: event.node.req.url,
      statusCode: 405,
      statusMessage: 'Method Not Allowed',
      message: `Method ${event.method} Not Allowed`,
    }
  }

  try {
    const body = await readBody(event)
    const { nama, email, body: messageText } = body

    // Validate required fields
    if (!nama || !email || !messageText) {
      setResponseStatus(event, 400)
      return {
        error: true,
        url: event.node.req.url,
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Missing fields',
      }
    }

    // Get config
    const config = useRuntimeConfig()
    const TELEGRAM_BOT_TOKEN = config.telegramBotToken
    const TELEGRAM_CHAT_ID = config.telegramChatId

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      setResponseStatus(event, 500)
      return {
        error: true,
        statusCode: 500,
        message: 'Missing telegram configuration'
      }
    }

    // Escape function for MarkdownV2 - only escape user input
    const escape = (str: string) => str.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1')

    const telegramMessage = `*New Visitor Message*

👤 *Name:* ${escape(nama)}
✉️ *Email:* ${escape(email)}
💬 *Message:* ${escape(messageText)}`

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    await $fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'MarkdownV2'
      }
    })

    return {
      error: false,
      statusCode: 2000,
      status: 'success',
      message: 'Message successfully sent'
    }
  } catch (error: any) {
    console.error('Error sending message:', error)

    setResponseStatus(event, 500)
    return {
      error: true,
      url: event.node.req.url,
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to send message',
    }
  }
})