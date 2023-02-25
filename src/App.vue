<template>
	<VirtualScroll />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VirtualScroll from "@/components/VirtualScroll.vue";
export default defineComponent({
  name: 'App',
  components: {
	  VirtualScroll
  }
});
</script>

<style lang="scss">
</style>
