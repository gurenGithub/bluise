<template>
  <div>
    <div class="flex mt-6 rout">
      <div class="banner w-3/4 flex-1 mr-6">
        <banner />
        <div class="mt-4 mb-4">
          <CItems />
        </div>
        <div class="list flex-1 mt-2">
          <div class="bg-white px-4 pt-4">
            <c-title>最新推文</c-title>
          </div>
          <List :items="news.items"></List>
        </div>
      </div>
      <div class="tabs w-1/4 shrink-0">
        <Tags />
        <div class="reco shrink-0 py-2 px-4 bg-white w-auto mt-6">
          <c-title>广告招商</c-title>
        </div>
        <div class="reco shrink-0 py-2 px-4 bg-white w-auto mt-6">
          <c-title>热门文章</c-title>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';
import Banner from '@/components/partials/banner.vue';
import Tags from '@/components/partials/category.vue';
import List from '@/components/partials/list.vue';
import CTitle from '@/components/partials/Title.vue';
import CItems from '@/components/partials/Labels.vue';

@Component({
  components: { Banner, Tags, List, CItems, CTitle },
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
})
export default class Home extends Vue {
  welcomeText = settings.welcomeText;

  get posts(): Post[] {
    return this.$store.state.posts;
  }

  isSignedUp = false;

  form = {
    email: '',
  };

  encode(data): string {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  validEmail(email): boolean {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  async handleSubmit(): Promise<void> {
    if (!this.validEmail(this.form.email)) {
      // this.$refs.emailInput.focus();
      return;
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'signups', ...this.form }),
      });

      this.isSignedUp = true;
    } catch (error) {
      console.error(error);
    }
  }

  async asyncData({ app }) {
    let newApi = app.$api.getApi('news');

    let news = await newApi.getList({});

    //console.log(news);
    return { news };
  }
}
</script>
