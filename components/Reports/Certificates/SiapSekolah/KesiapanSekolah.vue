<template>
  <BaseCertificate title="Kesiapan Sekolah Siswa">
    <ContentSummary :summary="statusSummary" />
    <template v-for="(aspect, i) in aspectResults">
      <BarDescription :key="i" :i="i + 1" :aspect="aspect" />
    </template>
  </BaseCertificate>
</template>
<script>
import BaseCertificate from './components/BaseCertificate.vue'
import ContentSummary from './components/ContentSummary.vue'
import BarDescription from './components/BarDescription.vue'
export default {
  components: { BaseCertificate, ContentSummary, BarDescription },
  computed: {
    aspectResults() {
      return this.$store.state.asesmenDetail.detail.aspect_results
    },
    resultStatic() {
      return this.$store.state.asesmenDetail.detail.result_static
    },
    statusSummary() {
      let belumSiapAspectTotal = 0
      let siapAspectTotal = 0

      this.aspectResults.forEach((aspect) => {
        const valueOfContent = aspect.result_content.find(
          (content) => content.form_name === 'Values'
        )
        // if (valueOfContent === 1) siapDenganCatatanAspectTotal += 1
        if (valueOfContent && valueOfContent.value === 2) siapAspectTotal += 1
        else belumSiapAspectTotal += 1
      })

      if (belumSiapAspectTotal >= 3)
        return {
          title: this.static('title_belum_siap_sekolah'),
          description: this.static('description_belum_siap_sekolah'),
          icon: 'siap-sekolah/score-images/kesiapan-sekolah-1.png'
        }
      else if (siapAspectTotal >= 4 && !belumSiapAspectTotal)
        return {
          title: this.static('title_siap_sekolah'),
          description: this.static('description_siap_sekolah'),
          icon: 'siap-sekolah/score-images/kesiapan-sekolah-3.png'
        }
      else
        return {
          title: this.static('title_siap_sekolah_dengan_catatan'),
          description: this.static('description_siap_sekolah_dengan_catatan'),
          icon: 'siap-sekolah/score-images/kesiapan-sekolah-2.png'
        }
    }
  },
  methods: {
    static(key) {
      const find = this.resultStatic.find(
        (element) => element.form_name === key
      )?.content
      return find
    }
  }
}
</script>
