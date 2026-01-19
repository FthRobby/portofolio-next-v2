import { type Certificate, type CategoryTypeValue } from '~/models'

const certificates: Certificate[] = [
  {
    id: 1,
    name: 'Certificate of Completion for the SIB Dicoding Program – Frontend & Backend Web Developer',
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
    type: 'certifications',
    thumbnail: '/cert/js.webp'

  }
]

export const useCertificates = () => {
  const getCertificatesByCategory = (category: CategoryTypeValue): Certificate[] => {
    return certificates.filter(cert => cert.type === category)
  }

  return {
    getCertificatesByCategory
  }
}