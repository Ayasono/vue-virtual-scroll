<!--
<template>
	<div class='item'
	     ref='ref'>
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

<script lang='ts'>
import { reactive, toRefs } from 'vue'
interface Li {
	list: {
		image: String,

	}
}
export default {
	props: {
		list: {
			type: Object
		}
	},
	setup (props: Li, context: any) {

		return {
			...toRefs(reactive(props.list))
		}
	},
}
</script>

<style scoped
       lang='scss'>
.item {
	width: 100%;
	height: 100px;
	padding: 15px 10px;
	border: 1px solid red;

	display: flex;

	.text {
		width: 80%;

		.top {

		}

		.bottom {
			> div {
				float: left;
				padding: 0 10px;
			}
		}
	}

	.image {
		img {
			width: 50px;

		}
	}
}
</style>
-->
