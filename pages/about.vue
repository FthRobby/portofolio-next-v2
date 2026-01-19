<script lang="ts" setup>
import { CategoryType } from '~/models'
useSeoMeta({
  title: 'About',
  ogTitle: 'About',
})
</script>

<template>
  <div>
    <PageHeading>
      About
    </PageHeading>

    <div class="flex flex-col gap-16 max-w-xl">
      <section class="text-default-foreground max-w-xl leading-7 prose text-base md:text-lg">
        <p>
          I'm a frontend developer with a sharp eye for UX and design, meticulous attention to detail, and a relentless
          focus on quality.
        </p>

        <p>
          Skilled in JavaScript frameworks like Vue and React, also strictly typed with TypeScript, I turn ideas into
          refined, user-friendly experiences. I'm driven by a deep curiosity and a passion for UX/UI design, developer
          experience, and writing clean, maintainable code.
        </p>

        <p>
          Beyond code, I enjoy
          <IconWithText text="Cycling" icon="emojione-v1:person-mountain-biking" width="64" height="64" />
          both road bikes and MTBs. It's my favorite way to clear my head after a long
          day of staring at code and solving problems.

        </p>

        <p>
          When I'm not on the bike, I'm usually into collecting diecast cars, especially Hot Wheels and Matchbox. It's a
          fun, nostalgic hobby that lets me slow down and appreciate the small details outside of work.
        </p>
      </section>

      <AboutTechStack />

      
      <!-- <AboutBookshelf /> -->
      
      <!-- <AboutPodcasts />
      
      <AboutMovies /> -->
      <section class="text-default-foreground max-w-xl leading-7 prose dark:prose-invert text-base md:text-lg">
        <h2 class="text-default-foreground font-display font-medium mb-4">
          Professional Highlights
        </h2>
        <AboutAwards :type="CategoryType.awards" />
        <AboutCertificate :type="CategoryType.certification" />
      </section>
    </div>
  </div>
</template>
