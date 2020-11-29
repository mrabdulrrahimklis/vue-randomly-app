<template>
  <v-container>
    <v-row class="my-0 mx-16 pa-0" justify="center">
      <v-col sm="10" xl="6">
        <v-img
          class="mx-auto"
          height="48"
          width="48"
          :src="require('@/assets/images/Randomly.png')"
        />
        <h1 class="text-center">
          Randomly
        </h1>
        <v-card class="login-card pa-8">
          <h1 class="text-center font-weight-none">
            Create an account
          </h1>
          <v-form
            v-model="isSignUpFromValid"
            @submit.prevent="signup"
            id="signup-form"
          >
            <v-container class="px-8 py-0 mt-0 bt-0">
              <v-row>
                <v-col cols="12" sm="6" md="6" class="my-0 py-0">
                  <label class="text-left">
                    <h3>First Name</h3>
                    <v-text-field
                      class="mt-0 bt-0"
                      v-model="firstName"
                      label="First Name"
                      outlined
                      :rules="[rules.required]"
                    />
                  </label>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="my-0 py-0">
                  <label class="text-left">
                    <h3>Last Name</h3>
                    <v-text-field
                      class="mt-0 bt-0"
                      v-model="lastName"
                      label="Last Name"
                      outlined
                      :rules="[rules.required]"
                    />
                  </label>
                </v-col>
                <v-col cols="12" sm="12" md="12" class="my-0 py-0">
                  <label class="text-left">
                    <h3>Email</h3>
                    <v-text-field
                      class="mt-0 bt-0"
                      v-model="email"
                      label="Email"
                      outlined
                      :rules="[rules.required]"
                    />
                  </label>
                </v-col>
                <v-col cols="12" sm="12" md="12" class="my-0 py-0">
                  <label class="text-left">
                    <h3>Username</h3>
                    <v-text-field
                      class="mt-0 bt-0"
                      v-model="username"
                      label="Username"
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
                <v-col cols="12" sm="12" md="12" class="my-0 py-0">
                  <label class="text-left">
                    <h3>Date of Birth</h3>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="dateOfBirth"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="mt-0 bt-0"
                          v-model="dateOfBirth"
                          label="Date of Birth"
                          outlined
                          :value="due"
                          slot="activator"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          :rules="[rules.required]"
                        />
                      </template>
                      <v-date-picker v-model="dateOfBirth" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn text @click="$refs.menu.save(dateOfBirth)">
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </label>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-btn
                    v-if="!showSpinner"
                    type="submit"
                    form="signup-form"
                    class="signUpBtn ma-0 pa-0"
                  >
                    Get Started
                  </v-btn>
                  <div
                    v-if="showSpinner && getIsSignedUp === null"
                    class="content"
                  >
                    <div class="spinner"></div>
                  </div>
                  <div
                    class="text-center"
                    v-if="
                      getIsSignedUp != null ||
                        (getIsSignedUp != undefined &&
                          getIsSignedUp.success === 'Thanks for signing up.')
                    "
                  >
                    {{ getIsSignedUp.success }}
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-divider />
          <v-row justify="center" class="font-weight-none">
            <h3 class="mt-5">
              Already have an account?
              <span class="link-decoration" @click="routeToLogin">Sign in</span>
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
import { SIGNUP_EVENT } from "@/components/SignupComponent/store";
import moment from "moment";
import { RouteName } from "@/router/types";

@Component
export default class SignUpComponent extends Vue {
  @Action("signUp", { namespace: SIGNUP_EVENT })
  signUp!: Function;
  @Getter("getIsSignedUp", { namespace: SIGNUP_EVENT })
  getIsSignedUp!: any;

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      dateOfBirth: "",
      isSignUpFromValid: true,
      due: null,
      menu: "",
      showPassword: false,
      creating: false,
      showSpinner: false,
      rules: {
        required: (value: string) => !!value || "Required.",
        password: (value: string) => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        }
      }
    };
  }

  formatDate() {
    return this.$data.dateOfBirth ? this.$data.dateOfBirth : "";
  }

  checkForm() {
    if (
      this.$data.firstName &&
      this.$data.lastName &&
      this.$data.email &&
      this.$data.username &&
      this.$data.password &&
      this.$data.dateOfBirth
    ) {
      this.$data.isSignUpFromValid = true;
    }
  }
  signup() {
    if (this.$data.isSignUpFromValid) {
      this.signUp({
        firstName: this.$data.firstName,
        lastName: this.$data.lastName,
        email: this.$data.email,
        username: this.$data.username,
        password: this.$data.password,
        dateOfBirth: moment(this.$data.dateOfBirth).format("DD/MM/YYYY")
      });
      this.$data.firstName = "";
      this.$data.lastName = "";
      this.$data.email = "";
      this.$data.username = "";
      this.$data.password = "";
      this.$data.dateOfBirth = "";
      this.$data.showSpinner = true;
    }
  }

  routeToLogin() {
    this.$router.push({ name: RouteName.Login });
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  margin: 10px auto;
  background: white;
  width: 50px;
  height: 50px;
  top: 42%;
  left: 46%;
  border-radius: 50%;
  border: 8px solid white;
  border-bottom-color: #9f7aea;
  border-right: 2px;
  animation: rt 0.9s linear 0s infinite;
  transition: 0.5s all ease-in-out;
}

@keyframes rt {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
