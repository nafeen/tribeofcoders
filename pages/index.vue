<template>
  <div>
    <v-main
      id="scrolling-techniques-7"
      class="overflow-y-auto"
    >
      <v-container>
        Home
      </v-container>
    </v-main>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapMutations } from 'vuex'
  export default Vue.extend({
    data () {
      return {}
    },
    methods: {},
    mounted () {
      this.$store.commit('setTitle', 'Mission')
    },
    computed: {},
    watch: {}
  })
</script>

<style>
</style>
