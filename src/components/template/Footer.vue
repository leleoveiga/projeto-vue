<template>
	<footer class="footer">
		<span>Copyright <strong>Leonardo Veiga</strong></span>
	</footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style>
.footer {
	grid-area: footer;
	background-color: #ddd;
	color: #333;

	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: 10px;
}
</style>
