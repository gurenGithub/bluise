<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <div class="lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div class="group relative" v-for="(item, index) in list" :key="index">
            <a :href="item.link">
              <div
                class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
              >
                <img
                  :src="item.thumb"
                  :alt="item.title"
                  class="w-full h-full object-center object-cover"
                />
              </div>
              <div class="absolute bottom-0 w-full px-2 py-1 bg-gray-100 bg-opacity-75">
                <h4 class="text-sm text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    {{ item.title }}
                  </a>
                </h4>
                <p class="text-base font-semibold text-gray-900">{{ item.sub_title }}</p>
              </div>
            </a>
          </div>
        </div>
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
    ];
    return { list };
  },
};
</script>
