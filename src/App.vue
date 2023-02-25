<template>
	<div class='app'>
		<VirtualScroll/>
	</div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue';
import VirtualScroll from "@/components/VirtualScroll.vue";

export default defineComponent({
	name: 'App',
	components: {
		VirtualScroll
	}
});
</script>

<style lang='scss'>
* {
	padding: 0;
	margin: 0;
	list-style: none;
	box-sizing: border-box;
}

.app {

}
</style>
