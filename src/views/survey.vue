<script>
import { mapActions } from 'vuex'

export default {
  name: 'Survey',
  data() {
    return {
      answer1: 0,
      answer2: 0,
      answer3: 0,
      isSubmitted: false,
    }
  },
  methods: {
    ...mapActions(['addNewVotes']),

    send() {
      const result = [parseInt(this.answer1), parseInt(this.answer2), parseInt(this.answer3)]

      this.addNewVotes(result)
      this.isSubmitted = true
    },
  },
}
</script>

<template lang="pug">
form
  .card.text-center.mx-auto
    .card-header.fs-5
      | Survey
    .card-body.text-start
      p
        | Psychological safety is a critical component of high-performing teams.
        | survey is aimed to collect inputs from each member of a team and calculate
        | the psychological safety index. All participants will be kept anonymous.
        | Please carefully read the questions and provide your answer on a scale between 0-100.
      .mb-3.mt-5
        .row
          .col-12.col-sm-10.m-auto
            label.fw-bold.form-label(for='question1')
              | 1) If you make a mistake on this team, it is often holds against you
            .d-flex.justify-content-between
              p Strongly Agree
              p.text-primary.fw-bold {{ answer1 }}
              p Strongly Disagree
            input#question1.form-range(type='range', min='0', max='100', step='1', v-model='answer1')
            label.mt-4.fw-bold.form-label(for='question2')
              | 2) It is safe to take risk on this team
            .d-flex.justify-content-between
              p Strongly Agree
              p.text-primary.fw-bold {{ answer2 }}
              p Strongly Disagree
            input#question2.form-range(type='range', min='0', max='100', step='1', v-model='answer2')
            label.mt-4.fw-bold.form-label(for='question3')
              | 3) Working with members of this team, my unique skills and talents are valued and utilized
            .d-flex.justify-content-between
              p Strongly Agree
              p.text-primary.fw-bold {{ answer3 }}
              p Strongly Disagree
            input#question3.form-range(type='range', min='0', max='100', step='1', v-model='answer3')
            .mt-2
              .btn.btn-primary.fw-bold(v-if='!isSubmitted', @click='isSubmitted = true') Submit
              button.btn.btn-success(v-if='isSubmitted', @click='send') Do you Confirm your results?
              button.btn.btn-warning.ms-3(v-if='isSubmitted', @click='isSubmitted = false') Cancel
    .card-footer.text-muted
      p Serhat Ciftci @2021
</template>

<style scoped>
.card {
  max-width: 40rem;
}
</style>
