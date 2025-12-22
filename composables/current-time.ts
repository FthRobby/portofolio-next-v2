export const useCurrentTime = () => {
  const now = useNow()
  const nowFormatted = computed(() => {
    return new Intl.DateTimeFormat('id-ID', {
      timeStyle: 'medium',
      timeZone: 'Asia/Jakarta',
    }).format(now.value)
  })

  return {
    now,
    nowFormatted,
  }
}
