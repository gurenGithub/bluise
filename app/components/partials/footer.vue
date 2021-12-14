<template>
  <footer class="bg-gray-800">
    <div class="container max-w-7xl mx-auto flex pt-6 pb-6 text-white">

      <div class="text-xs">© {{new Date().getFullYear()}} guren_d@hotmail.com</div>
      <div class="shrink"></div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer {
  // background-color: $bluise;
}
</style>
