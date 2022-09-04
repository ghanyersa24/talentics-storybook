<template>
  <div class="aspect-item">
    <div class="row">
      <div class="col-sm-6">
        <div class="aspect-title s-mb-4">
          {{ aspectTitle }}
        </div>
        <div class="aspect-score-container mb-4">
          <div class="score progress">
            <div
              class="score-bar progress-bar"
              :style="`width: ${percent}%`"
            ></div>
          </div>
        </div>
        <div class="aspect-score-name">{{ scoreName }}</div>
      </div>
      <div class="col-sm-6">
        <div class="aspect-score-definition text-justify">
          {{ definition }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import toRoman from '@/helpers/toRoman'
export default {
  props: {
    i: {
      type: Number,
      default: 1
    },
    aspect: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    aspectTitle() {
      return toRoman(this.i) + '. ' + this.aspect.aspect.name
    },
    percent() {
      return this.aspect.score_percent || 0
    },
    scoreName() {
      return this.aspect.result_content.find(
        (content) => content.form_name === 'category_title'
      )?.value
    },
    definition() {
      return this.aspect.result_content.find(
        (content) => content.form_name === 'content_summary'
      )?.value
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/sekolahmu/_bootstraps.scss';
@import '~/assets/scss/sekolahmu/_font-type.css';
@import '~/assets/scss/sekolahmu/_layout.css';
@import '~/assets/scss/sekolahmu/_margin.css';
@import '~/assets/scss/sekolahmu/_siap-sekolah.css';
</style>
