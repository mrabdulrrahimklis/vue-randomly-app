<template>
  <v-row>
    <v-col class="mx-5">
      <v-row class="mx-5">
        <v-col>
          <v-row>
            <div class="mr-2">
              <v-avatar color="red">
                <span class="white--text headline font-size-12">
                  {{ post.user.firstName[0] }} {{ post.user.lastName[0] }}
                </span>
                <!--                <v-img-->
                <!--                  class="border-circle avatar-border"-->
                <!--                  :src="post.user.profileImage"-->
                <!--                />-->
              </v-avatar>
            </div>
            <v-row justify="space-between" class="ml-2">
              <v-col>
                <v-row>
                  <h3>{{ post.user.firstName }} {{ post.user.lastName }}</h3>
                  <h4 class="ml-1">@{{ post.user.username }}</h4>
                </v-row>
              </v-col>
              <v-col class="text-right">
                {{ post.createdOn }}
              </v-col>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="ml-16 mr-5">
        {{ post.text }}
      </v-row>
      <v-row class="ml-16 mr-5">
        <v-col cols="2" class="ma-0 pa-0 mt-3" @click="() => this.like(post)">
          <v-icon v-if="!post.isLikedByUser">
            mdi-heart-outline
          </v-icon>
          <v-icon color="purple" v-if="post.isLikedByUser">
            mdi-heart
          </v-icon>
          <span>
            {{ post.likesCount }}
          </span>
        </v-col>
        <v-col
          cols="2"
          class="ma-0 pa-0 mt-3"
          @click="() => this.commentModal(post)"
        >
          <v-icon>
            mdi-comment-text-outline
          </v-icon>
          <span>
            {{ post.commentsCount }}
          </span>
        </v-col>
        <v-col cols="2" class="ma-0 pa-0 mt-3">
          <v-icon>
            mdi-share-variant
          </v-icon>
          <span>
            {{ post.commentsCount }}
          </span>
        </v-col>
      </v-row>
      <v-row class="ml-16 mr-5">
        <v-img :src="post.image" />
      </v-row>
    </v-col>
    <v-dialog width="600px" v-model="isCommentModalOpen">
      <v-card width="100%" class="pa-5">
        <v-container fluid>
          <v-row justify="center">
            <h2 class="text-center mt-2 mb-4">
              Comment
            </h2>
          </v-row>
          <v-row>
            <v-textarea
              v-model="commentText"
              solo
              name="input-7-4"
              label="Write a comment"
            />
          </v-row>
          <v-row justify="space-between">
            <v-btn
              @click="isCommentModalOpen = false"
              class="border-circle cancle-button"
            >
              Cancel
            </v-btn>
            <v-btn
              class="border-circle comment-button"
              @click="createCommentFunction(post)"
            >
              Comment
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Action } from "vuex-class";
import { POSTS_LIST } from "@/components/NewsFeed/store";

@Component
export default class Posts extends Vue {
  @Action("likePost", { namespace: POSTS_LIST })
  likePost!: Function;
  @Action("fetchPosts", { namespace: POSTS_LIST })
  fetchPosts!: Function;
  @Action("createComment", { namespace: POSTS_LIST })
  createComment!: Function;
  @Prop() readonly post!: any;

  isCommentModalOpen = false;
  commentText = "";

  async commentModal() {
    this.isCommentModalOpen = true;
  }

  async createCommentFunction(post: any) {
    console.log(post)
    this.createComment({
      text: this.commentText,
      post: post.id
    }).then(() => {
      this.fetchPosts();
    });
    this.isCommentModalOpen = false;
  }

  async like(post: any) {
    const likePost = {
      post: post.id
    };
    this.likePost(likePost).then(() => {
      this.fetchPosts();
    });
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/global";
</style>
