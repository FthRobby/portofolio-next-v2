import { type Certificate, type CategoryTypeValue } from '~/models'

const certificates: Certificate[] = [
  {
    id: 1,
    name: 'Certificate of Completion for the SIB Dicoding Program – Frontend & Backend Web Developer',
    nameKey: 'about.highlights.certificates.sib',
    issuer: '',
    issueDate: '',
    credentialID: '',
    credentialURL: '',
    thumbnail: '/awards/sib.webp',
    type: 'awards'
  },
  {
    id: 2,
    name: 'Certificate of Completion for Internship Program at PT Git Solution',
    nameKey: 'about.highlights.certificates.gitSolution',
    issuer: '',
    issueDate: '',
    credentialID: '',
    credentialURL: '',
    thumbnail: '/awards/git.webp',
    type: 'awards'
  },
  {
    id: 3,
    name: 'Certificate of Appreciation as a Bootcamp Mentor',
    nameKey: 'about.highlights.certificates.mentor',
    issuer: '',
    issueDate: '',
    credentialID: '',
    credentialURL: '',
    thumbnail: '/awards/mentor_cert.webp',
    type: 'awards'
  },
  {
    id: 4,
    name: 'Certificate of Appreciation for the Bootcamp Mentor with the Best Progress Improvement',
    nameKey: 'about.highlights.certificates.mentorProgress',
    issuer: '',
    issueDate: '',
    credentialID: '',
    credentialURL: '',
    thumbnail: '/awards/mentor_cert_2.webp',
    type: 'awards'
  },
  {
    id: 5,
    name: 'Meta Certificate Programming with JavaScript',
    nameKey: 'about.highlights.certificates.javascript',
    type: 'certifications',
    thumbnail: '/cert/js.webp'
  },
  {
    id: 6,
    name: 'Meta Certificate React Basics',
    nameKey: 'about.highlights.certificates.reactBasics',
    type: 'certifications',
    thumbnail: '/cert/react_basic.webp'
  },
  {
    id: 7,
    name: 'Meta Certificate React Advanced',
    nameKey: 'about.highlights.certificates.reactAdvanced',
    type: 'certifications',
    thumbnail: '/cert/react_advanced.webp'
  },
  {
    id: 8,
    name: 'Meta Certificate React Native',
    nameKey: 'about.highlights.certificates.reactNative',
    type: 'certifications',
    thumbnail: '/cert/react_native.webp'
  },
  
]

export const useCertificates = () => {
  const getCertificatesByCategory = (category: CategoryTypeValue): Certificate[] => {
    return certificates.filter(cert => cert.type === category)
  }

  return {
    getCertificatesByCategory
  }
}
