<template>
	<div class='item'>
		<div class='text'>
			<div class='top'>
				<div class='title'>{{ title }}</div>
			</div>

			<div class='bottom'>
				<div class='reads'>{{ reads }}</div>
				<div class='from'>{{ from }}</div>
				<div class='date'>{{ date }}</div>
			</div>
		</div>
		<div class='image'>
			<img :src='image'
			     alt='none'>
		</div>
	</div>
</template>

<script setup>

const props = defineProps({
	list: {
		type: Object
	}
})

const { date, from, id, image, reads, title } = props.list

</script>

<style scoped
       lang='scss'>
.item {
	width: 100%;
	height: 12vh;
	padding: 15px 10px;
	border: 1px solid red;

	display: flex;

	.text {
		width: 80%;

		.top {

		}

		.bottom {
			display: flex;
		}
	}
}
</style>
