<template>
  <div>
    <v-card>
      <v-container class="ma-0 pb-0">
        <v-row class="px-2">
          <v-avatar class="avatar-border mt-2 mb-2 pa-0">
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
              class="ml-0 pa-0"
            />
          </v-avatar>
          <v-text-field
            v-model="textData"
            label="What's going on?"
            append-icon="mdi-image"
            class="font-size-16 mt-2 mb-2 mx-2"
            background-color="#edf2f7"
            solo
          />
          <v-btn
            @click="() => this.createNewPost()"
            class="mt-2 mb-2 border-circle post-button"
            height="48"
          >
            Post
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="mt-5">
      <h2 class="text-center pa-2">Home</h2>
      <v-divider></v-divider>
      <v-row v-for="(post, index) in getPosts.results" :key="index">
        <!-- if user is not able to see posts from other which is not in followings -->
        <!-- @TODO: Need to FIX back <Posts v-if="post.user.isFollowing" :post="post" /> -->
        <Posts :post="post" />
      </v-row>
      <v-divider />
      <v-row>
        <v-col>
          <v-btn
            class="border-circle text-color-white next-button load-more-posts"
          >
            <h2>
              Load More Posts
            </h2>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Posts from "./Posts.vue";
import { Action, Getter } from "vuex-class";
import { POSTS_LIST } from "@/components/NewsFeed/store";
import { IListOfPost, IPosts } from "@/components/NewsFeed/types";

@Component({
  components: {
    Posts
  }
})
export default class NewsFeedView extends Vue {
  @Action("fetchPosts", { namespace: POSTS_LIST })
  fetchPosts!: any;
  @Action("createPost", { namespace: POSTS_LIST })
  createPost!: any;
  @Getter("getPosts", { namespace: POSTS_LIST })
  getPosts!: IListOfPost | IPosts;

  textData = "";

  mounted() {
    this.fetchPosts();
  }

  async createNewPost() {
    if (this.$data.textData !== "") {
      await this.createPost({
        text: this.textData
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/global";
</style>
