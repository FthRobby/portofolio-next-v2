<script lang="ts" setup>
import { CategoryType } from '~/models'

const { t } = useI18n()

useSeoMeta({
  title: () => t('about.meta.title'),
  ogTitle: () => t('about.meta.title'),
})
</script>

<template>
  <div>
    <PageHeading>
      {{ t('about.title') }}
    </PageHeading>

    <div class="flex flex-col gap-16 max-w-xl">
      <section class="text-default-foreground max-w-xl leading-7 prose text-base md:text-lg">
        <p>
          {{ t('about.intro.focus') }}
        </p>

        <p>
          {{ t('about.intro.skills') }}
        </p>

        <p>
          {{ t('about.intro.cyclingPrefix') }}
          <IconWithText text="Cycling" icon="emojione-v1:person-mountain-biking" width="64" height="64" />
          {{ t('about.intro.cyclingSuffix') }}
        </p>

        <p>
          {{ t('about.intro.hobby') }}
        </p>
      </section>

      <AboutTechStack />

      <!-- <AboutBookshelf /> -->

      <!-- <AboutPodcasts />

      <AboutMovies /> -->
      <section class="text-default-foreground max-w-xl leading-7 prose dark:prose-invert text-base md:text-lg">
        <h2 class="text-default-foreground font-display font-medium mb-4">
          {{ t('about.highlights.title') }}
        </h2>
        <AboutAwards :type="CategoryType.awards" />
        <AboutCertificate :type="CategoryType.certification" />
      </section>
    </div>
  </div>
</template>
