<script lang="ts" setup>
import { type CategoryTypeValue, type Certificate } from '~/models'
import {
  AlertDialogPortal,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from 'radix-vue'


const props = defineProps<{ type: CategoryTypeValue }>()

const { getCertificatesByCategory } = useCertificates()
const { t } = useI18n()
const open = ref<boolean>(false)
const selectedCert = ref<Certificate | null>(null)

const certificates = computed(() =>
  getCertificatesByCategory(props.type)
)

function openDialog(cert: Certificate) {
  selectedCert.value = cert
  open.value = true
}

function getCertificateName(cert: Certificate) {
  return cert.nameKey ? t(cert.nameKey) : cert.name
}
</script>

<template>
  <DialogRoot v-model:open="open">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
      <div v-for="cert in certificates" :key="cert.id"
        class="max-w-sm rounded overflow-hidden shadow-lg border cursor-pointer" @click="openDialog(cert)">
        <img class="w-full" :src="cert.thumbnail" :alt="getCertificateName(cert)">
        <div class="px-6">
          <div class="font-bold text-xl mb-2">{{ getCertificateName(cert) }}</div>
        </div>
      </div>
    </div>
    <AlertDialogPortal>
      <DialogOverlay class="fixed inset-0 bg-black/50 z-[90]" />

      <DialogContent
        class="fixed top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 max-w-3xl w-[90vw] rounded-lg bg-white p-4">
        <DialogTitle class="text-black text-left w-9/12">
          {{ selectedCert ? getCertificateName(selectedCert) : '' }}
        </DialogTitle>
        <DialogClose class="absolute top-3 right-3 text-black border-none">
          ✕
        </DialogClose>
        <img v-if="selectedCert" :src="selectedCert?.thumbnail" :alt="getCertificateName(selectedCert)"
          class="w-full h-auto rounded mt-[1rem]" />
      </DialogContent>
    </AlertDialogPortal>
  </DialogRoot>
</template>
