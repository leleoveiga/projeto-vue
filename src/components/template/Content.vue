<template>
	<div class="content">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "Content",
};
</script>

<style>
.content {
	/* display: flex; */
	/* flex-direction: column;
	justify-content: left;
	align-content: left; */
	grid-area: content;
	background-color: #efefef;
	padding: 20px;
}
</style>
