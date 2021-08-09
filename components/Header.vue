<template>
  <div>
    <v-app-bar
      absolute
      app
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
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Tribe of Coders
          </v-list-item-title>
          <v-list-item-subtitle>
            Coding a better world
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          nuxt
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Vuex from 'vuex'
  export default {
    name: 'Header',
    data () {
      let drawer: boolean = false
      let items: Array<{ title: string, icon: string, link: string }> = [
        { title: 'Home', icon: 'mdi-home-outline', link: '/' },
        { title: 'Mission', icon: 'mdi-information-outline', link: '/mission' },
        { title: 'Contact', icon: 'mdi-account-box-outline', link: '/contact' }
      ]
      return {
        drawer,
        items
      }
    },
    computed: {
      ...Vuex.mapGetters({
        title: 'getTitle'
      })
    }
  }
</script>
