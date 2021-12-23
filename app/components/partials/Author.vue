<template>
  <div class="bg-white">
    <div class="p-4 pt-12 pb-6 flex items-center justify-items-center flex-col relative">
      <div
        class="top-0 z-0 ring-2 ring-white absolute rounded-t-sm rounded-r-sm overflow-hidden w-full"
      >
        <img
          style="object-fit: cover; filter: blur(10px);"
          class="inline-block h-20 filter w-full"
          :src="value.author_avatar || bg"
          :alt="value.author_name"
        />
      </div>
      <img
        style="object-fit: cover;"
        class="inline-block h-16 w-16 relative z-10 rounded-full ring-2 ring-white"
        :src="author_avatar || value.author_avatar"
        :alt="author_name || value.author_name"
      />
      <p class="mt-2 text-xl font-bold text-gray-900">
        <a>{{ author_name || value.author_name }}</a>
      </p>
      <div class="mt-2 flex">
        <span
          class="text-white rounded-xl px-3 py-1 text-xs"
          :class="[
            { 'mr-3': parseInt(index) !== labels.length - 1 },
            ['bg-orange-600', 'bg-blue-700', 'bg-red-600', 'bg-green-600'][index] || 'bg-green-600',
          ]"
          v-for="(label, index) in labels"
          :key="label"
        >
          {{ label }}
        </span>
      </div>

      <div>
        <div class="max-w-2xl mt-4 mx-auto lg:max-w-none">
          <div class="lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            <div class="group relative text-sm text-center">
              {{ follow }}
            </div>
            <div class="group relative text-sm text-center">
              {{ fans }}
            </div>
            <div class="group relative text-sm text-center">
              {{ like }}
            </div>
            <div class="group relative text-sm text-center">
              {{ visit }}
            </div>
          </div>
          <div class="lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            <div class="group relative text-sm text-center">
              粉丝
            </div>
            <div class="group relative text-sm text-center">
              关注
            </div>
            <div class="group relative text-sm text-center">
              点赞
            </div>
            <div class="group relative text-sm text-center">
              访问量
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    author_id: {
      type: String,
      default: '',
    },
    value: {
      type: Object,
      default() {
        return {
          author_avatar: '',
          author_name: '',
        };
      },
    },
  },
  mounted() {
    let api = this.$api.getApi('author');

    api.getById(this.author_id).then((res) => {
      this.bg = res.bg;
      this.labels = res.labels || [];
      this.author_name = res.nick;
      this.author_avatar = res.avatar;

      let { focus, fans, like, visit } = res;

      'follow,fans,like,visit'.split(',').map((el) => {
        this[el] = res[el] || '0';
      });
    });
  },
  data() {
    return {
      follow: '0',
      fans: '0',
      like: '0',
      visit: '0',
      bg: '',
      labels: [],
      author_avatar: '',
      author_name: '',
    };
  },
};
</script>
