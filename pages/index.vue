<template>
  <v-main class="overflow-y-auto">
    <StaticAbout />
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
        content     : 'Tribe of Coders',
        hid         : 'Tribe of Coders',
        name        : 'Tribe of Coders',
        title       : 'Tribe of Coders'
      }
      return {
        meta
      }
    },
    head () {
      let title: string = ''
      let meta: Array<Meta> = []
      return {
        title : this.meta.title,
        meta  : [{
          content   : this.meta.content,
          hid       : this.meta.hid,
          name      : this.meta.name
        }]
      }
    },
    mounted() {
      this.$store.dispatch('setTitle', this.meta.title)
    }
  }
</script>
