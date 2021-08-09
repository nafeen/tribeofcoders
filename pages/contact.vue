<template>
  <v-main class="overflow-y-auto">
    <StaticContact />
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
        content     : 'Contact Us | Tribe of Coders',
        hid         : 'Contact Us',
        name        : 'Contact Us',
        title       : 'Contact Us'
      }
      return {
        meta
      }
    },
    head (callback: any) {
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
    mounted () {
      this.$store.dispatch('setTitle', this.meta.title)
    }
  }
</script>
