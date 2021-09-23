<script>
import HeaderNavigation from '@/components/header-navigation.vue'

export default {
  name: 'App',
  components: {
    HeaderNavigation,
  },
}
</script>

<template lang="pug">
#app
  body
    .container-fluid.g-0
      header
        HeaderNavigation
      main.py-3.px-2
        router-view
</template>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css');
#app,
body,
html,
.container-fluid {
  height: 100%;
  width: 100%;
  margin: 0;
}
html {
  font-size: 16px;
}
</style>
