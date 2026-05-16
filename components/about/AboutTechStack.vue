<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="text-default-foreground max-w-xl leading-7 prose dark:prose-invert text-base md:text-lg">
    <h2 class="text-default-foreground font-display font-medium mb-4">
      {{ t('about.techStack.title') }}
    </h2>
    <p>
      {{ t('about.techStack.daily.prefix') }}
      <IconWithText text="React" icon="logos:react" />,
      <IconWithText text="React Native" icon="devicon:reactnative-wordmark" />,
      <IconWithText text="Expo" icon="devicon:expo" />,
      <IconWithText text="TypeScript" icon="logos:typescript-icon" />,
      <span class="text-nowrap">
        <IconWithText text="Tailwind" icon="logos:tailwindcss-icon" />,
      </span>{{ }}
      <IconWithText text="Zustand" icon="devicon:zustand" />,
      <IconWithText text="shadcn" icon="simple-icons:shadcnui" />,
      <IconWithText text="Jira" icon="devicon:jira" />,
      <IconWithText text="Git" icon="devicon:git" />,
      {{ t('about.techStack.daily.and') }}
      <IconWithText text="Bun" icon="devicon:bun" />.
    </p>

    <p>
      {{ t('about.techStack.experience.prefix') }}
      <IconWithText text="Vue" icon="devicon:vuejs" />,
      <IconWithText text="Nuxt" icon="devicon:nuxt" />,
      {{ t('about.techStack.experience.and') }}
      <IconWithText text="Pinia" icon="logos:pinia" />,
      {{ t('about.techStack.experience.like') }}
      <IconWithText text="Tanstack Query" icon="logos:react-query-icon" />.
    </p>

    <h3 class="text-default-foreground font-medium text-xl">
      {{ t('about.techStack.radar.title') }}
    </h3>

    <p>
      {{ t('about.techStack.radar.backendPrefix') }}
      <IconWithText text="Supabase" icon="devicon:supabase" />,
      {{ t('about.techStack.radar.and') }}
      <IconWithText text="Firebase" icon="devicon:firebase" />,
      {{ t('about.techStack.radar.backendSuffix') }}
    </p>
    <p>
      {{ t('about.techStack.radar.learningPrefix') }}
      <IconWithText text="NestJS" icon="devicon:nestjs" />,
      {{ t('about.techStack.radar.and') }}
      <IconWithText text="Laravel" icon="devicon:laravel" />
      {{ t('about.techStack.radar.learningSuffix') }}
    </p>

    <!-- <h3 class="text-default-foreground font-medium text-xl">
      Beyond web
    </h3>

    <p>
      Outside of web dev, <IconWithText text="Python" icon="logos:python" /> is my go-to to, although I'm definitely a bit rusty.
    </p>

    <p>
      I worked extensively with <IconWithText text="Java" icon="logos:java" /> during my college years but haven't touched it in a while. I experimented with <IconWithText text="Solidity" icon="simple-icons:solidity" /> a few years ago, before I knew better. More recently, I've been exploring <IconWithText text="ReScript" icon="logos:rescript-icon" />, a statically-typed language that compiles to efficient and human-readable JavaScript.
    </p>

    <p>
      In the future, I'd love to explore functional programming, particularly <IconWithText text="Elixir" icon="devicon:elixir" /> or <IconWithText text="OCaml" icon="devicon:ocaml" />.
    </p> -->
  </section>
</template>
