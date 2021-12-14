<template>
  <div class="bg-white h-full px-5">
    <p class="py-2 text-lg font-extrabold tracking-tight text-gray-900">推荐</p>
    <div class="flex items-center pb-2" v-for="(item, index) in list" :key="index">
      <div class="flex-shrink-0 h-10 w-10">
        <a :href="item.link">
          <img class="h-10 w-10 rounded-full" :src="item.thumb" alt="" />
        </a>
      </div>
      <div class="ml-4">
        <a :href="item.link">
          <div class="text-sm font-medium text-gray-900">
            {{ item.title }}
          </div>
          <div class="text-sm text-gray-500">
            {{ item.sub_title }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const list = [
      {
        thumb: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        title: 'Desk and Office',
        sub_title: 'Work from home accessories',
        link: '',
      },
      {
        thumb: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        title: 'Self-Improvement',
        sub_title: 'Journals and note-taking',
        link: '',
      },
      {
        thumb: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        title: 'Travel',
        sub_title: 'Daily commute essentials',
        link: '',
      },
      {
        thumb: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        title: 'Travel',
        sub_title: 'Daily commute essentials',
        link: '',
      },
    ];
    return { list };
  },
};
</script>
