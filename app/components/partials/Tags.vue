<template>
  <div class="ctags">
    <ul class="u-list">
      <slot />
      <li class="ctags__item" v-for="(tag, tagIndex) in reItems" :key="tagIndex">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    maxCount: {
      type: Number,
      default: 10,
    },
    maxLenght: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    reItems() {
      let c = [].concat(this.items);
      if (c.length > this.maxCount) {
        c.length = this.maxCount;
      }
      let length = 0;

      let cs = [];
      c.map((el) => {
        let name = el || '';
        if (length < this.maxLenght) {
          cs.push(el);
        }
        length += (name || '').length + 1;
      });
      length -= 1;
      let preLength = 0;
      cs.map((el, index) => {
        if (index != cs.length - 1) {
          preLength += (el || '').length + 1;
        }
      });

      if (length > this.maxLenght) {
        //console.log(length);
        let number = this.maxLenght - preLength;
        if (number > 0 && number < cs[cs.length - 1].length) {
          cs[cs.length - 1] = cs[cs.length - 1].substr(0, number) + '...';
        }
      }
      return cs;
      //return c;
    },
  },
};
</script>
