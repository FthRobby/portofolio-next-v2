<script lang="ts" setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-icons/vue'

const route = useRoute('projects-slug')

const currentIndex = ref(0)

const { getProduct } = useProjects()
const { t } = useI18n()
const project = computed(() => {
  const { slug } = route.params
  return typeof slug === 'string' ? getProduct(slug) : undefined
})

const projectDescription = computed(() => {
  return project.value?.descriptionKey
    ? t(project.value.descriptionKey)
    : project.value?.description
})

const images = computed(() => {
  const { images, thumbnail } = project.value ?? {}
  if (images?.length) {
    return images
  }
  return thumbnail ? [thumbnail] : []
})

useSeoMeta({
  title: () => project.value?.name ?? t('projects.meta.title'),
  ogTitle: () => project.value?.name ?? t('projects.meta.title'),
})
</script>

<template>
  <div v-if="project" class="w-full">
    <div>
      <div class="mt-5 flex flex-col md:flex-row items-start justify-between gap-4">
        <h1 class="text-5xl lg:text-7xl font-medium font-display text-left">
          {{ project.name }}
        </h1>

        <div class="hidden md:flex items-center gap-3 mt-2">
          <Button to="/projects" variant="frosted-ghost" class="flex items-center gap-2 lowercase">
            <Icon name="lucide:arrow-left" class="text-[1.2em]" /> {{ t('projects.actions.back') }}
          </Button>
          <Button v-if="project.repo" :to="project.repo" external target="_blank" variant="secondary"
            class="flex items-center gap-2 lowercase">
            <Icon name="lucide:code" class="text-[1.2em]" /> {{ t('projects.actions.code') }}
          </Button>
          <Button v-if="project.url" :to="project.url" external target="_blank" variant="default"
            class="flex items-center gap-2 lowercase">
            <Icon name="lucide:arrow-up-right" class="text-[1.2em]" /> {{ t('projects.actions.live') }}
          </Button>
        </div>
      </div>

      <div class="mt-5 flex flex-col gap-2 text-[11px] max-w-lg">
        <div class="flex flex-wrap items-center gap-2">
          <template v-for="tag in project.tags" :key="tag">
            <Badge class="font-mono lowercase text-nowrap" variant="secondary-border">
              {{ tag }}
            </Badge>
          </template>
        </div>

        <div class="flex md:hidden flex-wrap items-center gap-2">
          <Button to="/projects" variant="frosted-ghost" class="flex items-center gap-2 lowercase">
            <Icon name="lucide:arrow-left" class="text-[1.2em]" /> {{ t('projects.actions.back') }}
          </Button>
          <NuxtLink :to="project.repo" external target="_blank" class="block md:hidden">
            <Badge class="font-mono lowercase text-nowrap flex items-center gap-1" variant="secondary-border">
              <Icon name="lucide:code" /> {{ t('projects.actions.code') }}
            </Badge>
          </NuxtLink>
          <NuxtLink :to="project.url" external target="_blank" class="block md:hidden">
            <Badge class="font-mono lowercase text-nowrap flex items-center gap-1" variant="primary">
              <Icon name="lucide:arrow-up-right" /> {{ t('projects.actions.live') }}
            </Badge>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-5 font-sans text-base md:text-lg max-w-3xl">
        <p>
          {{ projectDescription }}
        </p>
      </div>

      <!-- TODO: implement image distortion effects -->
      <Card v-if="images?.length > 1" class="mt-10 max-w-3xl">
        <div class="relative overflow-hidden rounded-md ring ring-input">
          <!-- Slides -->
          <div class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="image in images" :key="image" class="min-w-full">
              <!-- <NuxtLink :to="image" target="_blank" external> -->
                <img :src="image" alt="Thumbnail" class="w-full h-auto" width="1440">
              <!-- </NuxtLink> -->
            </div>
          </div>

          <!-- Dots -->
          <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            <button v-for="(_, index) in images" :key="index" class="h-2 w-2 rounded-full transition" :class="index === currentIndex
              ? 'bg-white'
              : 'bg-white/50 hover:bg-white'" @click="currentIndex = index" />
          </div>
          <button class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
            @click="currentIndex = (currentIndex - 1 + images.length) % images.length">
            <ChevronLeftIcon width="12" height="24" />
          </button>

          <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
            @click="currentIndex = (currentIndex + 1) % images.length">
            <ChevronRightIcon width="12" height="24" />
          </button>

        </div>
      </Card>
      <Card v-else class="mt-10 max-w-3xl">
        <div v-for="image in images" :key="image">
          <div class="overflow-hidden ring ring-input rounded-md">
            <!-- <NuxtLink :to="image" target="_blank" external> -->
              <img width="1440" :src="image" alt="Thumbnail" class="w-full h-auto">
            <!-- </NuxtLink> -->
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
