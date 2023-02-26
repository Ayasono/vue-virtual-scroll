<template>
	<div class='container'>
		<ListItem v-for='item in news.list'
		          :list='item'
		          :key='item.id'
		          :ref='getItem'
		/>
	</div>
</template>

<script setup>
import getNews from '@/api/mock'
import ListItem from '@/components/ListItem.vue'
import { onMounted, ref } from 'vue'

const news = getNews(100)
console.log(news)

const items = []
function getItem (el) {
	items.push(el)
}
console.log(items)

onMounted(() => {

})

</script>

<style scoped>
.container {
	width: inherit;
	height: inherit;
}
</style>
