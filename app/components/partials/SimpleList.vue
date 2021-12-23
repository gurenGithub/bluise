<template>
  <div class="h-full">
    <div class="mt-2 simple-list__item" v-for="(item, index) in items" :key="index">
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
  computed: {},
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
