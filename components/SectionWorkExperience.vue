<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display">
      {{ t('home.experience.title') }}
    </h2>
    <div class="flex flex-col gap-1">
      <WorkExperienceEntry
        company="Fortis Solution"
        company-url="https://fortissolution.id/"
        :company-location="t('home.location')"
        location-icon="circle-flags:id"
        :position="t('home.experience.fortis.position')"
        :start-date="t('home.experience.fortis.startDate')"
        :end-date="t('home.experience.present')"
        slug="fortis"
        logo="/fortis-logo.jpg"
        :used="['Vue', 'React',  'React Native', 'TypeScript', 'Expo', 'Tailwind', 'Tamagui', 'Jira']"
      >
        {{ t('home.experience.fortis.description') }}
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Dicoding Indonesia"
        company-url="https://www.dicoding.com/"
        :company-location="t('home.experience.dicoding.location')"
        location-icon="circle-flags:id"
        :position="t('home.experience.dicoding.position')"
        :start-date="t('home.experience.dicoding.startDate')"
        :end-date="t('home.experience.dicoding.endDate')"
        slug="dicoding"
        logo="/dicoding-logo.jpg"
        :used="['HTML', 'CSS', 'Javascript', 'PWA', 'Local Storage', 'Responsive website Layout']"
        logo-class="h-[14px]"
      >
        <template #default>
          {{ t('home.experience.dicoding.description') }}
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Git Solution"
        company-url="https://www.gitsolution.co.id/"
        :company-location="t('home.location')"
        location-icon="circle-flags:id"
        :position="t('home.experience.gitsolution.position')"
        :start-date="t('home.experience.gitsolution.startDate')"
        :end-date="t('home.experience.gitsolution.endDate')"
        slug="gitsolution"
        logo="/gits-logo.jpg"
        :used="['Vue', 'JavaScript', 'Tailwind CSS', 'Daisy Ui', 'Pinia', 'Vuex']"
      >
        <template #default>
          {{ t('home.experience.gitsolution.description') }}
        </template>
      </WorkExperienceEntry>

      <!-- <WorkExperienceEntry
        company="Three of them Ltd."
        company-url="https://www.3ofthem.eu/"
        company-location="Zapresic, Croatia"
        location-icon="circle-flags:hr"
        position="Junior Frontend Developer"
        start-date="Aug 2021"
        end-date="Jul 2022"
        slug="3ofthem"
        logo="/3ot-logo.jpeg"
        :used="['Vue', 'JavaScript', 'TypeScript', 'Nuxt 3', 'Pinia', 'Vuex', 'Tailwind', 'UnoCSS', 'Sass', 'PrimeVue', 'Storybook', 'Vite']"
      >
        <template #default>
          <p>
            Maintained the flagship IhreApotheken.de platform. Developed and maintained COVID-19 Vaccine Booking System.
          </p>
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Infokarta d.o.o"
        company-url="https://gis.infokarta.hr/"
        company-location="Split, Croatia"
        location-icon="circle-flags:hr"
        position="Frontend Developer"
        start-date="May 2021"
        end-date="Jul 2021"
        slug="infokarta"
        :used="['Nuxt', 'Vuex', 'JavaScript', 'Mapbox', 'Bootstrap', 'Sass', 'Node', 'Express', 'Postgres']"
      >
        <template #logo>
          <Icon name="emojione:world-map" class="aspect-square size-4 rounded-[2px] -ml-0.5" alt="company logo" />
        </template>

        <template #default>
          Developed an interactive web-based GIS platform enabling local governments to visualize, analyze, and manage spatial data for urban planning, asset tracking, and public services.
        </template>
      </WorkExperienceEntry> -->
    </div>
  </section>
</template>
