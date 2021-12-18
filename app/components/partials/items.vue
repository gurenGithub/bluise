<template>
  <div class="h-auto">
    <div class="flex flex-nowrap overflow-x-auto">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="mr-4 rounded-md whitespace-nowrap bg-white border-1 py-2 border-neutral-300 px-4"
      >
        <a :href="item.link">
          <div
            class="text-sm font-medium text-gray-900 break-normal whitespace-nowrap"
            style="white-space: nowrap;"
          >
            {{ item.title }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
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
