<template>
  <div id="reports" class="siap-sekolah-report">
    <section class="page">
      <div class="page-header">
        <div class="confidential-text">
          <span>Rahasia</span>
        </div>
        <div class="header-logo">
          <img
            src="~/assets/img/reports/certificates/siap-sekolah/smm-logo.png"
            alt="Sekolah Murid Merdeka"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="page-content">
        <h4 class="page-title">{{ title }}</h4>
        <div class="content-biodata mb-3">
          <div class="row">
            <div class="col-sm-6">
              <div class="biodata-item">
                <span class="item-title">Nama Anak</span>
                <span>:</span>
                <span class="item-value">{{ user.name }}</span>
              </div>
              <div class="biodata-item">
                <span class="item-title">Jenis Kelamin Anak</span>
                <span>:</span>
                <span class="item-value">{{ gender }}</span>
              </div>
              <div class="biodata-item">
                <span class="item-title">Usia Anak</span>
                <span>:</span>
                <span class="item-value">{{ age }}</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="biodata-item">
                <span class="item-title">Tanggal Lahir Anak</span>
                <span>:</span>
                <span class="item-value">
                  {{ $moment(birthdate).format('DD MMMM Y') }}
                </span>
              </div>
              <div class="biodata-item">
                <span class="item-title">Tanggal Pemeriksaan</span>
                <span>:</span>
                <span class="item-value">{{
                  $moment(user.completed_at).format('DD MMMM Y')
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <slot />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  computed: {
    user() {
      return this.$store.state.asesmenDetail.detail.user
    },
    birthdate() {
      return this.user.birthdate
    },
    age() {
      const diff = this.$moment(this.user.completed_at).diff(
        this.birthdate,
        'milliseconds'
      )
      const duration = this.$moment.duration(diff)
      const years = duration.years()
      const months = duration.months()
      const days = duration.days()
      let age = ''
      if (years) age += years + ' tahun '
      if (months) age += months + ' bulan '
      if (days) age += days + ' hari'
      return age
    },
    gender() {
      if (this.user.gender === 'F') return 'Perempuan'
      return 'Laki-laki'
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
