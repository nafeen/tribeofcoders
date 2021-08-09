<template>
  <v-main class="overflow-y-auto">
    <StaticMission />
  </v-main>
</template>
<script lang="ts">
  import Vue from 'vue'
  interface Meta {
    content         : string,
    hid             : string,
    name            : string,
    title           : string
  }
  export default {
    data () {
      let meta  : Meta = {
        content     : 'Our Mission | Tribe of Coders',
        hid         : 'Our Mission',
        name        : 'Our Mission',
        title       : 'Our Mission'
      }
      return {
        meta
      }
    },
    head () {
      return {
        title : this.meta.title,
        meta  : [{
          content   : this.meta.content,
          hid       : this.meta.hid,
          name      : this.meta.name
        }]
      }
    },
    mounted () {
      this.$store.dispatch('setTitle', this.meta.title)
    }
  }
</script>
