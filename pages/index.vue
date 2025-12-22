<script lang="ts" setup>
const { setMode } = useTheme()
const { nowFormatted } = useCurrentTime()

useSeoMeta({
  title: 'Fatah Robby',
  ogTitle: 'Fatah Robby',
})
</script>

<template>
  <div class="flex flex-col gap-16 max-w-3xl">
    <section>
      <div class="mb-5 flex items-center text-muted-foreground gap-2">
        <Badge variant="outline"
          class="font-mono flex items-center p-0 backdrop-blur-lg bg-white/5 dark:bg-transparent hover:bg-white/5">
          <span class="px-2.5 py-0.5">{{ nowFormatted }}</span>
          <span class="border-l px-2.5 py-0.5 flex items-center">
            <span class="inline-flex items-center gap-1">
              <span class="relative flex size-2 mr-1.5">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span class="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Yogyakarta, Indonesia
            </span>
          </span>
        </Badge>
      </div>

      <div class="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-[16rem] justify-center ml:-0 lg:ml-[18rem]">
        <img src="/knzo.png" alt="Fatah Robby Salam"
          class="mx-auto mb-6 size-[25rem] rounded-2xl object-contain lg:mb-0 lg:mx-0 lg:size-[35rem]  shrink-0" />
        <h1
          class="drop-shadow-sm text-default-900 dark:text-default-50 text-balance text-4xl/[1.1] sm:text-6xl/[1] lg:text-7xl/[1] font-medium font-display mb-4 md:mb-6">
          Hola, I'm Robby,<br />
          I build
          <span class="italic underline text-fuchsia-400">mobile apps</span><br />
          with a <span class="underline text-indigo-400">frontend mindset</span>.
        </h1>
      </div>

      <div class="text-default-foreground text-base md:text-lg leading-7">
        <p>
          React Native Developer, currently at
          <NuxtLink to="https://fortissolution.id/" target="_blank" class="underline hover:text-primary">
            Fortis Solutions
          </NuxtLink>.
          <br />
          I focus on building high-quality mobile applications with great UX, performance, and attention to detail.
          <br />
          I enjoy crafting cross-platform, mobile-first experiences and continuously expanding my skills toward
          full-stack mobile development.
        </p>

        <div class="mt-6 flex items-center gap-3">
          <Button to="/projects" variant="default" class="lowercase">
            Projects
          </Button>

          <Button to="/about" variant="frosted-ghost" class="lowercase">
            About me
          </Button>
        </div>
      </div>
    </section>

    <SectionLinks />

    <SectionWorkExperience />
  </div>
</template>
