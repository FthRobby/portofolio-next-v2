<script lang="ts" setup>
type LinkItem = { label: string, links: { linkText: string, link: string, clickToCopy?: boolean }[] }

const { t } = useI18n()

const links = computed<LinkItem[]>(() => [
  {
    label: 'GitHub',
    links: [{ linkText: 'fthrobby', link: 'https://github.com/fthrobby' }],
  },
  {
    label: 'LinkedIn',
    links: [{ linkText: 'fthrobby', link: 'https://www.linkedin.com/in/mckenzo' }],
  },
  // {
  //   label: 'Signal',
  //   links: [{ linkText: 'let\'s chat', link: 'https://signal.me/#eu/lC_xtCm-HAQfuw6teYnoABnKphlSXt5Tw-4ZtMmpsobhYkWORv9Dj79r1oMYNoFG' }],
  // },
  // {
  //   label: 'Email',
  //   links: [{ linkText: 'robbysalamf@gmailo.com', link: 'mailto:hi@matijao.com', clickToCopy: true }],
  // },
  {
    label: t('home.links.resume'),
    links: [
      { linkText: 'cv.pdf', link: '/cv.pdf' },
    ],
  },
])
</script>

<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display">
      @
    </h2>
    <div>
      <LinkRow
        v-for="contact in links"
        :key="contact.label"
        v-bind="contact"
      />
    </div>
  </section>
</template>
