<template>
  <v-app light>
    <v-toolbar dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-btn>normal</v-btn>
        <v-btn class='primary'>primary</v-btn>
        <v-btn class='accent'>accent</v-btn>
        <v-btn class='secondary'>secondary</v-btn>
        <v-btn class='info'>info</v-btn>
        <v-btn class='warning'>warning</v-btn>
        <v-btn class='error'>error</v-btn>
        <v-btn class='success'>success</v-btn>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
