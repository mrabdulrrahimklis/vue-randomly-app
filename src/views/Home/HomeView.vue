<template>
  <v-container>
    <v-row class="ma-0 pa-0">
      <v-spacer />
      <Header />
      <v-col cols="5">
        <NewsFeedView />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsFeedView from "@/components/NewsFeed/NewsFeedView.vue";
import Header from "@/views/Home/Header.vue";

@Component({
  components: { Header, NewsFeedView }
})
export default class HomeView extends Vue {}
</script>
