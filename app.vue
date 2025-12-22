<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt'
import Toaster from './components/ui/toast/Toaster.vue'

const description = 'Frontend developer with a relentless focus on quality.'

useSeoMeta({
  titleTemplate: '%s • frobby',
  description,
  ogDescription: description,
  // ogUrl: 'matijao.com',
  // twitterTitle: 'Matija Osrečki',
  twitterDescription: description,
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})
</script>

<template>
  <Html lang="en">
    <Body>
      <Toaster />

      <ClientOnly>
        <TheCanvas />
      </ClientOnly>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <Teleport to="body">
        <ClientOnly>
          <!-- <CommandBar /> -->
        </ClientOnly>
      </Teleport>

      <Analytics />
    </Body>
  </Html>
</template>

<style>
:root {
  --sidebar: 14rem;
}

html.dark {
  color-scheme: dark;
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
