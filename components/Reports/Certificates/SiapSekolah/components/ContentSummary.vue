<template>
  <div class="content-summary">
    <div class="row">
      <div class="col-sm-4">
        <div class="summary-icon-container">
          <div class="summary-icon">
            <div class="icon">
              <img :src="img" alt="Sekolah Murid Merdeka" class="img-fluid" />
            </div>
          </div>
          <b class="summary-score-name">{{ title }}</b>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="summary-narration text-justify" v-html="description"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    summary: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    img() {
      return this.summary.icon
        ? '../../../../../img/' + this.summary.icon
        : '../../../../../img/siap-sekolah/score-images/tumbuh-kembang-1.png'
    },
    title() {
      return this.summary.title.replace(/<\/?[^>]+>/gi, ' ') || 'NO TITLE'
    },
    description() {
      return this.summary.description || 'NO DESCRIPTION'
    }
  }
}
</script>
