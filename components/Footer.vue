<template>
  <div>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Tribe of Coders</strong>
      </v-col>
    </v-footer>
  </div>
</template>
<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  export default Vue.extend({
    name: 'Footer',
    data () {
      return {}
    },
    methods: {},
    mounted () {},
    computed: {},
    watch: {}
  })
</script>
<style scoped>
</style>
