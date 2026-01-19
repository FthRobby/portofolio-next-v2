<script setup lang="ts">
defineProps({
  error: Object
})

const goHome = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center">
    <h1 class="text-7xl font-bold">
      {{ error?.statusCode || 404 }}
    </h1>

    <p class="mt-4 text-gray-500">
      {{ error?.statusMessage || 'Page not found' }}
    </p>

    <button
      class="mt-6 px-4 py-2 bg-black text-white rounded"
      @click="goHome"
    >
      Back to Home
    </button>
  </div>
</template>
