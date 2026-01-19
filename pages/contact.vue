<script lang="ts" setup>
import { toast, useToast } from '~/components/ui/toast'
useSeoMeta({
  title: 'Contact',
  ogTitle: 'Contact',
})

const nama = ref('')
const email = ref('')
const message = ref('')
const isLoading = ref(false)
const statusMessage = ref('')
const statusType = ref<'success' | 'error'>('success')

const handleSubmit = async () => {
  isLoading.value = true
  statusMessage.value = ''

  try {
    const { data, error } = await useFetch('/api/send-message', {
      method: 'POST',
      body: {
        nama: nama.value,
        email: email.value,
        body: message.value
      }
    })

    if (error.value) {
      throw error.value
    }

    statusType.value = 'success'
    statusMessage.value = 'Message successfully sent!'

    nama.value = ''
    email.value = ''
    message.value = ''

    setTimeout(() => {
      statusMessage.value = ''
    }, 5000)

    toast({
      title: 'Message Sent',
      description: 'Thanks for reaching out. I’ll get back to you soon.',
      variant: 'success',
    })
  } catch (error: any) {
    statusType.value = 'error'
    statusMessage.value = error?.data?.message || 'Failed to send message. Please try again.'
    console.error('Error:', error)
    toast({
      title: 'Failed to send message',
      description:
        error?.data?.message || 'Something went wrong. Please try again.',
      variant: 'error',
    })
  } finally {
    isLoading.value = false
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div>
    <PageHeading>
      What's Next?
    </PageHeading>
    <p class="w-full md:w-1/2 lg:w-1/2 text-gray-600 dark:text-gray-400">
      My inbox is always open! Whether it's a question or just to say hi, I'll get
      back to you as soon as I can. Feel free to message me anytime with
      updates or anything else!
    </p>

    <form @submit.prevent="handleSubmit" class="mt-16 max-w-2xl space-y-8">
      <!-- Status Message -->
      <transition enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2" enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2">
        <div v-if="statusMessage" class="p-4 rounded-lg border-l-4" :class="statusType === 'success'
          ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-500'
          : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-500'">
          {{ statusMessage }}
        </div>
      </transition>

      <!-- Name Input -->
      <div class="group">
        <label for="nama" class="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300 transition-colors">
          Name
        </label>
        <input id="nama" v-model="nama" type="text" required :disabled="isLoading" placeholder="Your name"
          class="w-full px-0 py-4 bg-transparent text-black dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600 text-lg disabled:opacity-50 disabled:cursor-not-allowed" />
      </div>

      <!-- Email Input -->
      <div class="group">
        <label for="email" class="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300 transition-colors">
          Email
        </label>
        <input id="email" v-model="email" type="email" required :disabled="isLoading" placeholder="your@email.com"
          class="w-full px-0 py-4 bg-transparent text-black dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600 text-lg disabled:opacity-50 disabled:cursor-not-allowed" />
      </div>

      <!-- Message Textarea -->
      <div class="group">
        <label for="message" class="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300 transition-colors">
          Message
        </label>
        <textarea id="message" v-model="message" required rows="6" :disabled="isLoading"
          placeholder="Your message here..."
          class="w-full px-0 py-2 bg-transparent text-black dark:text-white border-0 border-b-2 border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white focus:outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none text-lg disabled:opacity-50 disabled:cursor-not-allowed"></textarea>
      </div>

      <!-- Submit Button -->
      <div class="pt-4">
        <button type="submit" :disabled="isLoading"
          class="group relative px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-medium text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-md">
          <span class="relative z-10 flex items-center gap-2">
            <span v-if="isLoading"
              class="inline-block w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></span>
            {{ isLoading ? 'Sending...' : 'Send Message' }}
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </button>
      </div>
    </form>
  </div>
</template>