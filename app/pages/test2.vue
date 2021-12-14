<template>
  <article class="post">
    <div class="py-8 md:py-16 text-center mx-auto">
      <h1 class="text-lg md:text-xl lg:text-4xl xl:text-6xl"></h1>
    </div>

    <div class="post__content markdown pt-4 md:pt-6 md:pb-24" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {

    };
  },
})
export default class BlogPost extends Vue {
  //post!: Post;
  layout:'home'

  async asyncData({ params, payload }) {
    return {};
  }
}
</script>
