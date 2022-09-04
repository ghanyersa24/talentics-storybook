<template>
  <BaseCertificate title="Kesiapan Keluarga">
    <div class="content-summary-icon-container">
      <div class="content-summary-icon text-center">
        <img :src="img" alt="Sekolah Murid Merdeka" class="img-250" />
      </div>
    </div>

    <div class="content-summary">
      <div class="summary-narration">
        <p>
          {{ highlight }}
        </p>
        <br />
        <b class="inter-small-bold">Rekomendasi:</b>
        <p>
          {{ recommendation }}
        </p>
      </div>
    </div>
  </BaseCertificate>
</template>
<script>
import BaseCertificate from './components/BaseCertificate.vue'
export default {
  components: { BaseCertificate },
  computed: {
    resultContents() {
      return this.$store.state.asesmenDetail.detail.result_content
    },
    img() {
      let img = ''
      const title = this.static('category_title')
      if (title === 'Daring Rutin') img = 'kesiapan-keluarga-2.png'
      else img = 'kesiapan-keluarga-1.png'
      return '../../../../../img/siap-sekolah/score-images/' + img
    },
    highlight() {
      const description = this.static('info_description').split('|')
      return description[0]
    },
    recommendation() {
      const description = this.static('info_description').split('|')
      return description[1]
    }
  },
  methods: {
    static(key) {
      const find = this.resultContents.find(
        (element) => element.form_name === key
      )?.value
      return find
    }
  }
}
</script>
