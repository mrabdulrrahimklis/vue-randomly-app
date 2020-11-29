<template>
  <v-col cols="2">
    <v-img
      class="mt-5 ml-5 mb-5"
      height="48"
      width="48"
      :src="require('@/assets/images/Randomly.png')"
    />
    <div class="my-2 pa-3 border-circle pointer">
      <v-icon>mdi-home-outline</v-icon>
      <span class="ml-2">Home</span>
    </div>
    <div class="my-2 pa-3 border-circle pointer">
      <v-icon>mdi-bell-outline</v-icon>
      <span class="ml-2">Notifications</span>
    </div>
    <div class="my-2 pa-3 border-circle pointer">
      <v-icon>mdi-message-text</v-icon>
      <span class="ml-2">Message</span>
    </div>
    <div class="my-2 pa-3 border-circle pointer">
      <v-icon>mdi-account-outline</v-icon>
      <span class="ml-2">Profile</span>
    </div>
    <div
      class="my-2 pa-3 border-circle pointer"
      @click="() => this.logoutFunction()"
    >
      <v-icon>mdi-logout-variant</v-icon>
      <span class="ml-2">Log out</span>
    </div>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import { LOGIN_EVENT } from "@/components/LoginComponent/store";

@Component
export default class Header extends Vue {
  @Action("logout", { namespace: LOGIN_EVENT })
  logout!: Function;

  logoutFunction() {
    this.logout();
  }
}
</script>
