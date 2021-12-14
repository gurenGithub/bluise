<template>
  <div class="h-full">
    <div class="flex items-start p-4 mb-3 bg-white" v-for="(item, index) in list" :key="index">
      <div class="flex-shrink-0 h-32 w-48">
        <a :href="item.link">
          <img class="h-32 w-48 rounded" :src="item.thumb" alt="" />
        </a>
      </div>
      <div class="ml-4 flex-1 h-32 relative ">
        <a :href="item.link">
          <div class="text-sm font-medium text-gray-900">
            {{ item.title }}
          </div>
          <div class="text-sm text-gray-500 mt-1">
            {{ item.sub_title }}
          </div>

          <div class=" absolute bottom-0 text-gray-500 text-xs">
              2021-01-01
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
