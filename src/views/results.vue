<script>
import {mapState} from 'vuex'

export default {
  name: 'Results',
  computed: {
    ...mapState(['votes']),

    numberOfParticipants() {
      return this.votes.length
    },
  },
  methods: {
    getAverage(questionNo) {
      return Math.round(this.votes.reduce((acc, cur) => acc + cur[questionNo - 1], 0) / this.votes.length)
    },

    getData(questionNo) {
      let data = []
      let participantNo = 1

      for (const value of this.votes) {
        data.push([participantNo.toString(), value[questionNo - 1]])
        participantNo++
      }

      console.log(data)
      return data
    },
  },
}
</script>

<template lang="pug">
#results.m-auto.shadow-lg
  h2.text-center.py-3 Survey Results
  p.text-center (Number of Participants: {{numberOfParticipants}})
  hr.m-0
  section.mt-2.mx-3.mx-sm-5
    h4.mb-4 Question 1
    h6 1) If you make a mistake on this team, it is often holds against you
    p.ms-0.ms-sm-4 Explanationsdfsdfsdfsdfsf
    .row.mb-5.mx-0.mx-sm-2
      .col-12.col-md-8
        h6.text-center AVERAGE
        .d-flex.justify-content-between
          p Agree
          p.text-primary.fw-bold {{getAverage(1)}}
          p Disagree
        input#question3.form-range(type='range', min='0', max='100', step='1', :value='getAverage(1)', disabled)
    .row
      .col-12.col-md-8.mb-5
        h6.text-center INDIVIDUAL RESULTS
        column-chart(xtitle="Participants",:data='getData(1)',:min="0", :max="100")
      .col-12.col-md-4.mb-5
        .px-5
          h6.text-center TEAM OVERVIEW
          pie-chart(:data="[['Blueberry', 44], ['Strawberry', 23]]")
</template>

<style scoped>
#results {
  max-width: 60rem;
  height: 100%;
}
</style>
