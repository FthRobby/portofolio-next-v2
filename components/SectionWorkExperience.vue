<template>
  <section>
    <h2 class="mb-4 text-3xl font-medium font-display">
      Experience
    </h2>
    <div class="flex flex-col gap-1">
      <WorkExperienceEntry
        company="Fortis Solution"
        company-url="https://fortissolution.id/"
        company-location="Yogyakarta, Indonesia"
        location-icon="circle-flags:nl"
        position="Frontend Developer"
        start-date="Feb 2023"
        end-date="Present"
        slug="theydo"
        logo="/fortis-logo.jpg"
        :used="['Vue', 'React',  'React Native', 'TypeScript', 'Expo', 'Tailwind', 'Tamagui', 'Jira']"
      >
        Developing frontend web and mobile applications based on established designs, while prioritizing functionality, performance, and security.
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Dicoding Indonesia"
        company-url="https://www.dicoding.com/"
        company-location="Bandung, Indonesia"
        location-icon="circle-flags:hr"
        position="Bootcamp Mentor"
        start-date="Feb 2024"
        end-date="Jun 2024"
        slug="4ofthem"
        logo="/dicoding-logo.jpg"
        :used="['HTML', 'CSS', 'Javascript', 'PWA', 'Local Storage', 'Responsive website Layout']"
        logo-class="h-[14px]"
      >
        <template #default>
          Lead, assist, and maintain a conducive and safe learning environment for all bootcamp participants, providing consultative learning support to students.
        </template>
      </WorkExperienceEntry>

      <WorkExperienceEntry
        company="Git Solution"
        company-url="https://www.gitsolution.co.id/"
        company-location="Yogyakarta, Indonesia"
        location-icon="circle-flags:de"
        position="Fullstack Web Developer Intern"
        start-date="Aug 2022"
        end-date="Dec 2022"
        slug="mannacare"
        logo="/gits-logo.jpg"
        :used="['Vue', 'JavaScript', 'Tailwind CSS', 'Daisy Ui', 'Pinia']"
      >
        <template #default>
          Developed features for the restaurant platform to make it easier for customers to order and make payments, and to make it easier for owners to manage restaurant finances.
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
