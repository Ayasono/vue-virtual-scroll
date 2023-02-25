<template>
	<div class='container'>
		<ListItem v-for='item in news.list' :list='item' :key='item.id'/>
	</div>
</template>

<script setup>
import getNews from '@/api/mock'
import ListItem from '@/components/ListItem.vue'

const news = getNews(100)
console.log(news)
</script>

<style scoped>
	.container {
		width: inherit;
		height: inherit;
	}
</style>
