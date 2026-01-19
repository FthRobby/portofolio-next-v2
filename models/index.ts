export type Project = {
  slug: string
  name: string
  description: string
  descriptionShort?: string
  tags: string[]
  tagsPreview?: string[]
  timeframe: string
  repo?: string
  url?: string
  thumbnail?: string
  images?: string[]
  categories: CategorySlug[]
  color?: string
  // states
  wip?: boolean
}

export const Category = {
  projects: 'projects',
  hobby: 'hobby',
  modules: 'modules',
  extensions: 'extensions',
  templates: 'starts',
  collections: 'collections',
} as const

export type CategorySlug = typeof Category[keyof typeof Category]


export const CategoryType = {
  certification: 'certifications',
  awards: 'awards'
} as const

export type CategoryTypeValue =
  typeof CategoryType[keyof typeof CategoryType]

export type Certificate = {
  id: number
  name: string
  issuer?: string
  issueDate?: string
  credentialID?: string
  credentialURL?: string
  thumbnail?: string
  type: CategoryTypeValue
}
