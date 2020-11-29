<template>
  <v-row class="ma-0 pa-0">
    <v-col cols="4" class="pa-0 ma-0">
      <v-img
        class="height-100vh"
        :src="require('@/assets/images/login-image.png')"
      >
        <div class="pa-10">
          <h1 class="text-color-white">
            A simple social network
          </h1>
          <h1 class="text-color-white">
            Random as well
          </h1>
        </div>
      </v-img>
    </v-col>
    <v-col class="pa-0 ma-0 login-background" cols="8">
      <SignUpComponent />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUpComponent from "@/components/SignupComponent/SignUpComponent.vue";

@Component({
  components: {
    SignUpComponent
  }
})
export default class SignupView extends Vue {}
</script>
