<template>
  <div class="h-full">
    <div class="flex items-start p-4 mb-3 bg-white" v-for="(item, index) in items" :key="index">
      <div class="flex-shrink-0 h-32 w-48">
        <a :href="item | link" target="_blank">
          <img class="h-32 w-48 rounded" :src="item.thumb" alt="" />
        </a>
      </div>
      <div class="ml-4 flex-1 h-32 relative">
        <a :href="item | link" target="_blank">
          <div class="text-sm font-medium text-gray-900">
            {{ item.title }}
          </div>
          <div class="text-sm text-gray-700 mt-1">
            {{ item.instruction }}
          </div>

          <div class="absolute bottom-0 text-gray-700 text-xs">
            <Tags class="space" :items="item.tag_names">
              <li>
                <span class="article-pub_time">{{ item.pub_time | displayTime }}</span>
              </li>
            </Tags>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Tags from '@/components/partials/Tags.vue';
export default {
  components: { Tags },
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
