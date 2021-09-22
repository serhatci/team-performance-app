<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Survey',
  data() {
    return {
      answer1: 0,
      answer2: 0,
      answer3: 0,
      error: false,
    }
  },
  computed: {
    ...mapState(['votes']),
  },
  methods: {
    ...mapActions(['addNewVotes']),

    send(e) {
      e.preventDefault()

      const result = [parseInt(this.answer1), parseInt(this.answer2), parseInt(this.answer3)]

      this.addNewVotes(result)
    },
  },
}
</script>

<template lang="pug">
form(@submit='send')
  .card.text-center.mx-auto
    .card-header.fs-5
      | Survey
    .card-body.text-start
      p Psychological safety is a critical component of high-performing teams. This survey is aimed to collect inputs from each member of a team and calculate the psychological safety index. All participants will be kept anonymous. Please carefully read the questions and provide your view on a scale between 0-100.
      p.text-danger(v-show='error') Error message
      .mb-3.mt-5
        label.fw-bold.form-label(for='question1')
          | 1) If you make a mistake on this team, it is often holds against you
        .row
          .col-9.col-sm-10
            .d-flex.justify-content-between
              p Disagree
              p Agree
            input#question1.form-range(type='range', min='0', max='100', step='1', v-model='answer1')
          .col-3.col-sm-2
            p.text-nowrap {{answer1}}
            .mb-3
        label.mt-4.fw-bold.form-label(for='question2')
          | 2) It is safe to take risk on this team
        .row
          .col-9.col-sm-10
            .d-flex.justify-content-between
              p Disagree
              p Agree
            input#question2.form-range(type='range', min='0', max='100', step='1', v-model='answer2')
          .col-3.col-sm-2
            p.text-nowrap {{answer2}}
        label.mt-4.fw-bold.form-label(for='question3')
          | 3) Working with members of this team, my unique skills and talents are valued and utilized
        .row
          .col-9.col-sm-10
            .d-flex.justify-content-between
              p Disagree
              p Agree
            input#question3.form-range(type='range', min='0', max='100', step='1', v-model='answer3')
          .col-3.col-sm-2
            p.text-nowrap {{answer3}}
      button.btn.btn-primary(type='submit') Submit
    .card-footer.text-muted
      p {{votes}}
</template>

<style lang="scss" scoped>
.card {
  max-width: 40rem;
}
</style>
