<script>
import {mapState} from 'vuex'

export default {
  name: 'Results',
  computed: {
    ...mapState(['votes']),

    numberOfParticipants() {
      return this.votes.length
    },

    isResultAvailable() {
      if (this.votes.length === 0) return false

      return true
    },
  },
  methods: {
    getAverage(questionNo) {
      return Math.round(this.votes.reduce((acc, cur) => acc + cur[questionNo - 1], 0) / this.votes.length)
    },

    getOpinion(questionNo) {
      const average = this.getAverage(questionNo)

      if (average < 25) return 'strongly agree'
      if (average >= 25 && average < 50) return 'agree'
      if (average >= 50 && average < 75) return 'disagree'
      return 'strongly disagree'
    },

    getColumnChartData(questionNo) {
      let data = []
      let participantNo = 1

      for (const value of this.votes) {
        data.push([participantNo.toString(), value[questionNo - 1]])
        participantNo++
      }

      return data
    },

    getClusterAverage(start, end, questionNo) {
      const clusterValues = this.votes.filter(item => item[questionNo - 1] >= start && item[questionNo - 1] < end)
      console.log(clusterValues)

      if (clusterValues.length === 0) return 0

      const a = Math.floor((clusterValues.length / this.votes.length) * 100)
      console.log(a)
      return a
    },

    getPieChartData(questionNo) {
      return [
        ['Strongly Agree', this.getClusterAverage(0, 25, questionNo)],
        ['Agree', this.getClusterAverage(25, 50, questionNo)],
        ['Disagree', this.getClusterAverage(50, 75, questionNo)],
        ['Strongly Disagree', this.getClusterAverage(75, 101, questionNo)],
      ]
    },
  },
}
</script>

<template lang="pug">
#results.m-auto.shadow-lg
  h2.text-center.py-3 Survey Results
  p.text-center (Number of Participants: {{numberOfParticipants}})
  hr.m-0
  section(v-if='!isResultAvailable')
    .row.mt-3
      .col-10.col-sm-6.m-auto
        .alert.alert-danger.text-center(role='alert')
          | Please wait for particant's votes to see results.
  section.mt-2.mx-3.mx-sm-5(v-else)
    h4.mb-4 Question 1
    h6 1) If you make a mistake on this team, it is often holds against you
    p.ms-0.ms-sm-4 Your team overal {{getOpinion(1)}} that making mistake is not welcomed in the team
    .row.mb-5.mx-0.mx-sm-2
      .col-12.col-md-8
        h6.text-center AVERAGE
        .d-flex.justify-content-between
          p Agree
          p.text-primary.fw-bold {{getAverage(1)}}
          p Disagree
        input#question3.form-range(type='range', min='0', max='100', step='1', :value='getAverage(1)', disabled)
    .row
      .col-12.col-lg-8.mb-5
        h6.text-center INDIVIDUAL RESULTS
        column-chart(xtitle="Participants",:data='getColumnChartData(1)',:min="0", :max="100")
      .col-12.col-lg-4.mb-5
        .px-5
          h6.text-center TEAM OVERVIEW
          pie-chart(:data="getPieChartData(1)",:colors="['Lime','PaleGreen', 'DarkSalmon','Red']",:messages="{empty: 'No data'}",suffix="%")

      hr
      h4.mb-4 Question 2
      h6 2) It is safe to take risk on this team
      p.ms-0.ms-sm-4 Your team overal {{getOpinion(2)}} that taking risk is welcomed in the team
      .row.mb-5.mx-0.mx-sm-2
        .col-12.col-md-8
          h6.text-center AVERAGE
          .d-flex.justify-content-between
            p Agree
            p.text-primary.fw-bold {{getAverage(2)}}
            p Disagree
          input#question3.form-range(type='range', min='0', max='100', step='1', :value='getAverage(2)', disabled)
      .row
        .col-12.col-lg-8.mb-5
          h6.text-center INDIVIDUAL RESULTS
          column-chart(xtitle="Participants",:data='getColumnChartData(2)',:min="0", :max="100")
        .col-12.col-lg-4.mb-5
          .px-5
            h6.text-center TEAM OVERVIEW
            pie-chart(:data="getPieChartData(2)",:colors="['Lime','PaleGreen', 'DarkSalmon','Red']",:messages="{empty: 'No data'}",suffix="%")

      hr
      h4.mb-4 Question 3
      h6 3) Working with members of this team, my unique skills and talents are valued and utilized
      p.ms-0.ms-sm-4 Your team overal {{getOpinion(3)}} that their talents are appreciated in the team
      .row.mb-5.mx-0.mx-sm-2
        .col-12.col-md-8
          h6.text-center AVERAGE
          .d-flex.justify-content-between
            p Agree
            p.text-primary.fw-bold {{getAverage(3)}}
            p Disagree
          input#question3.form-range(type='range', min='0', max='100', step='1', :value='getAverage(3)', disabled)
      .row
        .col-12.col-lg-8.mb-5
          h6.text-center INDIVIDUAL RESULTS
          column-chart(xtitle="Participants",:data='getColumnChartData(3)',:min="0", :max="100")
        .col-12.col-lg-4.mb-5
          .px-5
            h6.text-center TEAM OVERVIEW
            pie-chart(:data="getPieChartData(3)",:colors="['Lime','PaleGreen', 'DarkSalmon','Red']",:messages="{empty: 'No data'}",suffix="%")
</template>

<style scoped>
#results {
  max-width: 60rem;
  height: 100%;
}
</style>
