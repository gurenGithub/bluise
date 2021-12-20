<template>
  <div class="h-auto">
    <div class="flex flex-nowrap overflow-x-auto">
      <div
        v-for="(item, index) in list"
        :key="index"
       
        class="mr-4 rounded-md whitespace-nowrap bg-white border-1 py-2 border-neutral-300 px-4"
      >
        <a :href="item.link">
          <div class="text-sm font-medium text-gray-900 break-normal whitespace-nowrap"  style="white-space:nowrap">
            {{ item.title }}
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
        thumb: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        title: 'Travel',
        sub_title: 'Daily commute essentials',
        link: '',
      }
    ];
    return { list };
  },
};
</script>
