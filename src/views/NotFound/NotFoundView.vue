<template>
  <v-container class="pa-0 ma-0 mx-auto">
    <v-row justify="center" class="pa-0 ma-0">
      <v-img
        @click="moveToHome"
        height="100vh"
        class="pa-0 ma-0"
        :src="require('@/assets/images/artboard_copy_2.png')"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouteName } from "@/router/types";

@Component
export default class NotFoundView extends Vue {
  moveToHome() {
    this.$router.push({ name: RouteName.HomeView });
  }
}
</script>
