<template>
  <v-container>
    <v-row class="my-0 ma-16 pa-0" justify="center">
      <v-col sm="10" xl="6">
        <v-img
          class="mx-auto mt-5"
          height="48"
          width="48"
          :src="require('@/assets/images/Randomly.png')"
        />
        <h1 class="text-center my-3">
          Randomly
        </h1>
        <v-card class="login-card pa-8">
          <v-row class="row-to-column mb-10">
            <v-col>
              <h2 class="text-center">Tadaaaa! 🎉</h2>
            </v-col>
            <v-col>
              <h2 class="text-center">
                Your role is
                <strong class="text-color-purple">Influencer!</strong>
              </h2>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <h1 class="text-center my-3">
            Sign in
          </h1>
          <v-form
            v-model="isSignUpFromValid"
            @submit.prevent="signin"
            id="signup-form"
          >
            <v-container class="px-8 py-3">
              <v-row>
                <v-col cols="12" sm="12" md="12" class="my-0 py-0">
                  <label class="text-left">
                    <h3>Username or Email Address</h3>
                    <v-text-field
                      class="mt-0 bt-0"
                      v-model="username"
                      label="Email"
                      outlined
                      :rules="[rules.required]"
                    />
                  </label>
                </v-col>
                <v-col cols="12" sm="12" md="12" class="my-0 py-0">
                  <label class="text-left">
                    <h3>Password</h3>
                    <v-text-field
                      class="mt-0 bt-0"
                      v-model="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      outlined
                      @click:append="showPassword = !showPassword"
                      :rules="[rules.required, rules.password]"
                    />
                  </label>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-row justify="center">
                    <h4 v-if="!getAuth" class="text-center text-color-alert">
                      Wrong credentials! Please check it one more time.
                    </h4>
                  </v-row>
                  <v-btn type="submit" form="signup-form" class="signUpBtn">
                    Sign in
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-divider />
          <v-row justify="center" class="font-weight-none">
            <h3 class="mt-5">
              Don’t have an account?
              <span class="link-decoration" @click="routeToSignup">
                Create account
              </span>
            </h3>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { RouteName } from "@/router/types";
import { LOGIN_EVENT } from "@/components/LoginComponent/store";
import { ILoginObject } from "@/components/LoginComponent/types";

@Component
export default class LoginComponent extends Vue {
  @Action("login", { namespace: LOGIN_EVENT })
  login!: Function;
  @Getter("getLoggedUser", { namespace: LOGIN_EVENT })
  getLoggedUser!: ILoginObject;
  @Getter("errorLog", { namespace: LOGIN_EVENT })
  errorLog!: ILoginObject;
  @Getter("getAuth", { namespace: LOGIN_EVENT })
  getAuth!: ILoginObject;

  data() {
    return {
      username: "",
      password: "",
      isSignUpFromValid: false,
      showPassword: false,
      creating: false,
      rules: {
        required: (value: string) => !!value || "Required.",
        password: (value: string) => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        }
      }
    };
  }

  checkForm() {
    if (this.$data.username && this.$data.password)
      this.$data.isSignUpFromValid = true;
    return this.$data.isSignUpFromValid;
  }

  routeToSignup() {
    this.$router.push({ name: RouteName.Signup });
  }

  signin() {
    if (this.checkForm()) {
      this.login({
        username: this.$data.username,
        password: this.$data.password
      });
    } else {
      this.$data.isSignUpFromValid = true;
    }
  }
}
</script>
