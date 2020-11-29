<template>
  <v-app style="background-color: #e5e5e5 !important;">
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "src/assets/scss/global.scss";
</style>
