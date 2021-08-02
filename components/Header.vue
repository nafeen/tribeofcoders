<template>
  <div>
    <v-app-bar
      app
      absolute
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <nuxt-link to="/">Mission</nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import { mapGetters } from 'vuex'
  export default Vue.extend({
    name: 'Header',
    data () {
      var drawer: boolean = false
      var group: boolean = false
      return {
        drawer,
        group
      }
    },
    methods: {},
    mounted () {},
    computed: {
      ...mapGetters({
        title: 'getTitle'
      })
    },
    watch: {
      group () {
        this.drawer = false
      },
      title: 'setTitle'
    }
  })
</script>
<style scoped>
</style>
