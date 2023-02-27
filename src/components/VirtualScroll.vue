<!--
<template>
	<div class='container'>
		<ListItem v-for='item in news.list.slice()'
		          :list='item'
		          :key='item.id'
		          ref='Items'
		/>
	</div>
</template>

<script setup>
import getNews from '@/api/mock'
import ListItem from '@/components/ListItem.vue'
import { onMounted, ref } from 'vue'

const news = getNews(1000)
console.log(news.list)

// virtual list -&#45;&#45; height: 80px
let min = ref(2)

window.addEventListener('scroll', e => {
	let scrollTop = e.target
})

</script>

<style scoped>
.container {
	width: inherit;
	height: inherit;
}
</style>
-->
