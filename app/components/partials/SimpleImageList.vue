<template>
  <div class="h-full">
    <div class="flex-shrink-0 h-32 w-full relative">
      <a :href="fistItem | link" target="_blank">
        <img class="h-32 w-full" :src="fistItem.thumb" alt="" />
      </a>
      <div class="absolute bottom-0 w-full px-2 py-1 bg-gray-100 bg-opacity-75">
        <h4 class="text-sm text-gray-600">
          <a href="#">
            <span class="absolute inset-0"></span>
            {{ fistItem.title }}
          </a>
        </h4>
      </div>
    </div>
    <div class="mt-2 simple-list__item" v-for="(item, index) in otherItems" :key="index">
      <div class="flex-1 relative">
        <a :href="item | link" target="_blank">
          <div class="text-sm font-medium text-gray-900 simple-list__item_title">
            {{ item.title }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    fistItem() {
      let item = [].concat(this.items)[0] || {};
      return item;
    },
    otherItems() {
      let items = [].concat(this.items);
      items.shift();
      return items;
    },
  },
  components: {},
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
