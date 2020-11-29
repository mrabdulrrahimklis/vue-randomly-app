<template>
  <v-container>
    <v-row class="mx-16 px-16">
      <v-col>
        <v-row>
          <div class="mr-2">
            <v-img
              height="48"
              width="48"
              :src="require('@/assets/images/Randomly.png')"
            />
          </div>
          <h1>Randomly</h1>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mx-16 px-16" justify="space-between">
      <v-col cols="6">
        <h2 class="text-color-gray">
          Please select at least
          <strong class="text-color-black"> 3 </strong>
          influencers to follow
        </h2>
      </v-col>
      <v-col cols="4">
        <h2 class="text-color-black" v-if="selected.length === 2">
          1 more
        </h2>
        <h2 class="text-color-black" v-if="selected.length === 1">
          2 more to go
        </h2>
        <h2 class="text-color-black" v-if="selected.length === 3">
          Great! You’re all set.
        </h2>
      </v-col>
      <v-col cols="2" class="text-right">
        <v-btn
          class="border-circle button-disabled text-color-white next-button"
          :disabled="selected.length < 3"
          @click="nextPage"
        >
          Next
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-16 px-16">
      <v-col cols="3" v-for="influencer in getInfluencers" :key="influencer.id">
        <v-card height="297">
          <v-row>
            <v-col>
              <v-img
                height="111px"
                width="111px"
                class="mt-3 border-circle mx-auto"
                :src="influencer.profileImage"
              />
            </v-col>
          </v-row>
          <h3 class="mx-auto text-center mt-2">
            {{ influencer.firstName }}
            {{ influencer.lastName }}
          </h3>
          <h5 class="mx-auto text-center mt-2 text-color-gray">
            {{ influencer.jobTitle }}
          </h5>
          <v-row justify="center">
            <v-col>
              <v-btn
                v-if="influencer.isFollowing"
                @click="addInfluencer(influencer)"
                class="text-center border-circle d-block mx-auto followingButton"
              >
                Following
              </v-btn>
              <v-btn
                v-if="!influencer.isFollowing"
                @click="addInfluencer(influencer)"
                class="text-center border-circle d-block mx-auto followButton"
              >
                Follow
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        class="text-center border-circle d-block mx-auto load-more-button mt-5"
        disabled
      >
        Load more
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { influencers } from "../../../data/influencerArray";
import { IInfluencers } from "../../../data/types";
import { Getter, Action } from "vuex-class";
import { CHOOSE_INFLUENCER } from "@/views/SelectInfluencers/store";
import { RouteName } from "@/router/types";

@Component
export default class SelectInfluencerView extends Vue {
  @Action("setInfluencers", { namespace: CHOOSE_INFLUENCER })
  setInfluencers!: Function;
  @Getter("getInfluencers", { namespace: CHOOSE_INFLUENCER })
  getInfluencers!: any[];
  selected: IInfluencers[] = [];

  addInfluencer(influencer: IInfluencers) {
    if (this.selected.length < 3) {
      this.selected.push(influencer);
      const newArray = this.getInfluencers.map(item =>
        item.id === influencer.id
          ? { ...item, isFollowing: !item.isFollowing }
          : item
      );
      this.setInfluencers(newArray);
      this.$forceUpdate();
    }
  }

  mounted() {
    this.setInfluencers(influencers);
  }

  nextPage() {
    this.$router.push({ name: RouteName.HomeView });
  }
}
</script>
