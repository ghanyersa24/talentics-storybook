<template>
  <BaseCertificate title="Tumbuh Kembang Anak">
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
      let hasBelumBerkembangAspect = false

      this.aspectResults.forEach((aspect) => {
        const valueOfContent = aspect.result_content.find(
          (content) => content.form_name === 'Values'
        )
        if (valueOfContent && valueOfContent.value === 0)
          hasBelumBerkembangAspect = true
      })

      if (!hasBelumBerkembangAspect)
        return {
          title: this.static('title_berkembang_sesuai_usia'),
          description: this.static('description_berkembang_sesuai_usia'),
          icon: 'siap-sekolah/score-images/tumbuh-kembang-2.png'
        }
      else
        return {
          title: this.static('title_belum_berkembang_sesuai_usia'),
          description: this.static('description_belum_berkembang_sesuai_usia'),
          icon: 'siap-sekolah/score-images/tumbuh-kembang-1.png'
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
