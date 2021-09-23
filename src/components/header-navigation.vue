<script>
export default {
  name: 'HeaderNavigation',

  methods: {
    resetVotes() {
      localStorage.removeItem('vuex')

      this.$router.push('/')
    },
  },
}
</script>

<template lang="pug">
nav.navbar.navbar-expand-md.navbar-light.px-3.border-bottom.shadow-sm(aria-label='Top sticky navigation bar')
  .container-fluid
    a.d-block.navbar-brand(href='/')
      h5 Team Performance App
    button.navbar-toggler.collapsed(
      type='button',
      data-bs-toggle='collapse',
      data-bs-target='#TopNavbars',
      aria-controls='TopNavbars',
      aria-expanded='false',
      aria-label='Toggle navigation'
    )
      span.navbar-toggler-icon.text-dark
    #TopNavbars.navbar-collapse.collapse
      ul.navbar-nav.mb-2.mb-md-0.ms-auto
        li.nav-item
          a.btn.btn-primary.m-1(href='/', role='button') Survey
        li.nav-item
          a.btn.btn-success.m-1(href='/results', role='button') Results
        li.nav-item
          a.btn.btn-danger.m-1(@click='resetVotes', role='button') Reset Survey
</template>

<style scoped>
nav {
  background-color: rgb(250, 250, 250);
}
</style>
