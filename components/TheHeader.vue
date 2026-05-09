<script lang="ts" setup>
import type { RouteLocationRaw } from '#vue-router'

const { toggleDark } = useTheme()
const { locale, setLocale, t } = useI18n()

const links: { to: RouteLocationRaw, labelKey: string }[] = [
  { to: { name: 'index' }, labelKey: 'nav.home' },
  { to: { name: 'about' }, labelKey: 'nav.about' },
  { to: { name: 'projects' }, labelKey: 'nav.projects' },
  { to: { name: 'contact' }, labelKey: 'nav.contact' },
  // { to: { name: 'uses' }, labelKey: 'nav.uses' },
]

const localeOptions = [
  { code: 'id', flag: '/id.png', labelKey: 'language.id' },
  { code: 'en', flag: '/en.png', labelKey: 'language.en' },
] as const

const activeLocaleOption = computed(() => {
  return localeOptions.find(item => item.code === locale.value) ?? localeOptions[0]
})

const nextLocaleOption = computed(() => {
  return localeOptions.find(item => item.code !== locale.value) ?? localeOptions[1]
})

async function toggleLocale() {
  await setLocale(nextLocaleOption.value.code)
}

const activeLinkClass = '!text-foreground hover:text-foreground'
</script>

<template>
  <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="font-mono text-[17px] flex items-center gap-1.5">
        @frobby
      </NuxtLink>

      <div class="flex md:hidden items-center gap-3 translate-y-1 ">
        <BaseTooltip>
          <template #content>
            ⌘ J
          </template>
          <Button variant="link" size="icon" class="translate-y-0.5" @click="toggleDark">
            <Icon name="ph:yin-yang-fill"
            class="text-[24px] transition-transform duration-300 ease-in-out hover:rotate-90 dark:rotate-180 hover:dark:rotate-[270deg]" />
          </Button>
        </BaseTooltip>
        <button
          type="button"
          class="grid size-7 mt-1 place-items-center rounded-full ring-offset-background transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          :aria-label="t(nextLocaleOption.labelKey)"
          :title="t(nextLocaleOption.labelKey)"
          @click="toggleLocale"
        >
          <img :src="activeLocaleOption.flag" :alt="t(activeLocaleOption.labelKey)" class="size-6 rounded-full object-cover">
        </button>
      </div>
    </div>

    <menu class="flex items-end gap-4 md:gap-6">
      <template v-for="link in links" :key="link.to.toString()">
        <BaseTooltip>
          <template #content>
          </template>
          <NuxtLink :to="link.to"
            class="text-lg text-muted-foreground  w-fit py-[0.2rem] align-middle font-medium lowercase transition-all"
            :active-class="activeLinkClass">
            {{ t(link.labelKey) }}
          </NuxtLink>
        </BaseTooltip>
      </template>
      
      <div class="hidden md:flex items-center gap-4">
        <button
          type="button"
          class="grid 
          size-7 place-items-center rounded-full ring-offset-background transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          :aria-label="t(nextLocaleOption.labelKey)"
          :title="t(nextLocaleOption.labelKey)"
          @click="toggleLocale"
        >
          <img :src="activeLocaleOption.flag" :alt="t(activeLocaleOption.labelKey)" class="size-9 w-10 rounded-full object-cover">
        </button>

        <BaseTooltip>
          <template #content>
            ⌘ J
          </template>
          <Button variant="link" size="icon" class="translate-y-0.5" @click="toggleDark">
            <Icon name="ph:yin-yang-fill"
              class="text-[24px] transition-transform duration-300 ease-in-out hover:rotate-90 dark:rotate-180 hover:dark:rotate-[270deg]" />
          </Button>
        </BaseTooltip>
      </div>
    </menu>
  </header>
</template>
