import type { CategorySlug, Project } from '~/models'
import { Category } from '~/models'

const categories: Record<CategorySlug, string> = {
  [Category.projects]: 'Projects',
  [Category.hobby]: 'Side projects',
  [Category.modules]: 'Packages & Modules',
  [Category.extensions]: 'Plugins, Scripts & Extensions',
  [Category.templates]: 'Templates',
  [Category.collections]: 'Collections',
}

const projects: Project[] = [
  {
    slug: 'simpres-hatpen',
    name: 'Mobile Presensi Hatpen',
    description: 'SimPres Hatpen is the official app for managing employee attendance at the Aviation Health Center.  With the support of Face Recognition technology, SimPres Hatpen ensures a faster, safer, and more accurate attendance process. The app also makes it easy to track attendance history and submit leave or absence requests online, giving employees greater flexibility in managing their attendance.',
    descriptionShort: 'An employee attendance app using face recognition to enable fast, secure check-ins, attendance tracking, and online leave requests.',
    tags: ['React Native', 'Expo', 'Tamagui', 'Zustand ', 'RN Vision Camera', 'Face Recognition'],
    tagsPreview: ['React Native', 'Expo', 'Zustand', 'Firebase'],
    timeframe: '2025',
    repo: '',
    url: '',
    thumbnail: '/projects/presensi-hatpen.webp',
    images: [
      '/projects/presensi-hatpen.webp',
      '/projects/presensi-hatpen-preview.webp',
    ],
    categories: [Category.projects],
    color: '#26252b',
  },
  {
    slug: 'epresensi-semeru',
    name: 'ePresensi Semeru',
    description: 'This application provides a practical solution by enabling personnel to attend activities digitally using mobile devices. With integrated and secure features, ePresence helps increase efficiency in managing attendance data and makes it easier to monitor attendance in operational activities.',
    descriptionShort: 'Official application designed to simplify the activity attendance process for all East Java Regional Police personnel.',
    tags: ['React Native', 'Expo', 'Gluestack UI', ' Zustand'],
    tagsPreview: ['React Native', 'Expo', 'Zustand'],
    timeframe: '2024',
    repo: '',
    url: '',
    thumbnail: '/projects/epresensi-semeru.webp',
    images: [
      '/projects/epresensi-semeru.webp',
      '/projects/epresensi-semeru-preview.webp'],
    categories: [Category.projects],
    color: '#26252b'
  },
  {
    slug: 'itani-sahabat-petani',
    name: 'iTani - Sahabat Petani',
    description: 'Itani is a digital farmery platform based on websites and mobile apps which provides easy solutions for #DigitalFarmers in getting 3P (Financing, Assistance with land processing and Harvest Processing). This technology is designed to answer the needs of #DigitalFarmers for knowledge about the commodities they are working on.',
    descriptionShort: 'A digital platform designed to support Digital Farmers with financing, land management, and harvest processing solutions.',
    tags: ['React Native CLI', 'RN UI', 'Zustand'],
    tagsPreview: ['React Native', 'RN UI', 'Zustand'],
    timeframe: '2024',
    repo: '',
    url: '',
    thumbnail: '/projects/itani.webp',
    images: [
      '/projects/itani.webp',],
    categories: [Category.projects],
    color: '#26252b'
  },
  {
    slug: 'imanhub',
    name: 'iManhub',
    description: 'This application is designed for users of all ages, both young and old. It not only features online Quran reading, but also includes a Qibla direction feature, a collection of authentic hadith readings, and a tasbih counter. Additionally, the application offers a collection of daily prayers. The technology used in developing this application includes Expo as a powerful multiplatform app framework and Gluestack UI for styling components.',
    descriptionShort: 'An all-in-one Islamic app providing Quran reading, Qibla direction, hadith collections, tasbih counter, and daily prayers for users of all ages.',
    tags: ['React Native CLI', 'RN UI', 'Zustand'],
    tagsPreview: ['React Native', 'Gluestack UI', 'Zustand', 'React Query'],
    timeframe: '2024',
    repo: '',
    url: '',
    thumbnail: '/projects/imanhub.webp',
    images: [
      '/projects/imanhub.webp',],
    categories: [Category.projects],
    color: '#26252b'
  },
  {
    slug: 'smart-ternak-dasboard',
    name: 'SmartTernak Dashboard',
    description: 'This dashboard was created to monitor the condition of livestock Broilers. It integrates a WebSocket system and connects in real time with IoT devices in the cage to monitor air temperature, humidity, ammonia levels, air flow, water flow, and light intensity. This web app can also be used to record when livestock are ready for distribution or sale. I was assigned to work on the front end of this dashboard in collaboration with the backend and IoT teams. The technologies used include VueJS, Bootstrap, Pinia, and Axios for API communication.',
    descriptionShort: 'A web-based dashboard for monitoring broiler livestock conditions in real time, integrating IoT devices to track environmental metrics and manage distribution readiness.',
    tags: ['VueJs', 'Bootstrap', 'Pinia'],
    tagsPreview: ['VueJs', 'Bootstrap', 'Pinia'],
    timeframe: '2023',
    repo: '',
    url: '',
    thumbnail: '/projects/smart-ternak.webp',
    images: [
      '/projects/smart-ternak.webp',],
    categories: [Category.projects],
    color: '#26252b'
  },
  {
    slug: 'smart-farm-dasboard',
    name: 'SmartFarm Dashboard',
    description: 'Just like the Smart-Ternak dashboard, the SmartFarm Dashboard is also used for recording and monitoring the condition of livestock, but in this case, the livestock being monitored are goats. This dashboard includes a feature for recording when it is time to harvest goats milk.The technologies used to create this dashboard include VueJS, Bootstrap, Vuex, and Axios for API communication.',
    descriptionShort: 'Goat livestock monitoring dashboard with milk harvest tracking, built using Vue.js and modern web technologies.',
    tags: ['VueJs', 'Bootstrap', 'Vuex'],
    tagsPreview: ['VueJs', 'Bootstrap', 'Vuex'],
    timeframe: '2023',
    repo: '',
    url: '',
    thumbnail: '/projects/smart-farm.webp',
    images: [
      '/projects/smart-farm.webp',],
    categories: [Category.projects],
    color: '#26252b'
  },
  {
    slug: 'restopia-mobile',
    name: 'Restopia Mobile (PWA)',
    description: 'I created this web application in collaboration with the UI/UX and backend teams. In developing it, I used web frontend technologies such as VueJS and Tailwind. This application aims to make it easier for customers to order food without having to queue at the cashier. It is integrated with the cashier system and kitchen applications to notify the chef when an order is received. When the order is complete, a notification will appear on the ordering device.',
    descriptionShort: 'PWA-based food ordering system with real-time cashier and kitchen integration, built using Vue.js and Tailwind CSS.',
    tags: ['VueJs', 'Tailwind', 'Daisy UI','Vuex'],
    tagsPreview: ['VueJs', 'Tailwind', 'Daisy UI', 'Vuex'],
    timeframe: '2022',
    repo: '',
    url: '',
    thumbnail: '/projects/genius-resto.webp',
    images: [
      '/projects/genius-resto.webp',],
    categories: [Category.projects],
    color: '#26252b'
  },
  {
    slug: 'restopia-dashboard',
    name: 'Restopia Dashboard',
    description: 'Just like the Restopia mobile application, this dashboard was created as the final project during the internship. I was assigned to work on the frontend of the dashboard, while other team members handled the backend logic. The dashboard is used to calculate profit amounts, record incoming and outgoing finances, print daily, weekly, or monthly reports, and allow admins to manage raw material stock or available menus. The technologies used include VueJS, Tailwind, Vuex, and Axios for API communication, and WebSocket for real-time communication between customer, cashier, and kitchen applications, ensuring smooth system integration.',
    descriptionShort: 'A real-time admin dashboard for a PWA-based food ordering system, managing finances, inventory, menus, and system communication via WebSocket.',
    tags: ['VueJs', 'Bootstrap', 'Flowbite UI', 'Vuex'],
    tagsPreview: ['VueJs', 'Bootstrap', 'Flowbite UI', 'Vuex'],
    timeframe: '2022',
    repo: '',
    url: '',
    thumbnail: '/projects/genius-resto-dashboard.webp',
    images: [
      '/projects/genius-resto-dashboard.webp',],
    categories: [Category.projects],
    color: '#26252b'
  },
  // {
  //   slug: 'bit-complete',
  //   name: 'Bit Complete',
  //   description: 'Tool for generating a valid 24th word for a BIP39 seed phrase',
  //   tags: ['Vue', 'TypeScript', 'Pico CSS', 'bitcoin'],
  //   tagsPreview: ['Vue', 'ts', 'Pico CSS', 'bitcoin'],
  //   timeframe: '2024',
  //   repo: 'https://github.com/matijaoe/seed-finisher',
  //   url: 'https://seed-finisher.vercel.app/',
  //   thumbnail: '/projects/bit-complete.webp',
  //   categories: [Category.hobby],
  //   color: '#027FC0',
  // },
 
  // {
  //   slug: 'bitcoin-books',
  //   name: 'Bitcoin Books',
  //   description: 'Curated Notion database of Bitcoin books with rich metadata and reference links',
  //   timeframe: '2025',
  //   url: 'https://seasoned-trader-815.notion.site/16313affa9c780d9a6dede8dc01c61d0?v=7810fd9ff53f41908faf81cc36476562',
  //   tags: ['notion', 'bitcoin'],
  //   categories: [Category.collections],
  // },
]

export const useProjects = () => {
  const uniqueCategories = computed(() => {
    const categorySet = new Set<CategorySlug>()
    projects.forEach((project) => {
      project.categories.forEach((category) => {
        categorySet.add(category)
      })
    })

    return Array.from(categorySet).map((category) => {
      return {
        label: categories[category],
        value: category,
      }
    })
  })

  const getProduct = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug)
  }

  const getProjectsByCategory = (category: CategorySlug): Project[] => {
    return projects.filter((project) => project.categories.includes(category))
  }

  return {
    projects,
    getProduct,
    getProjectsByCategory,
    uniqueCategories,
  }
}
