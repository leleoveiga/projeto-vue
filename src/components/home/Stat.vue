<template>
	<div class="stat">
		<div class="stat-icon">
			<i :class="icon" :style="style"> </i>
		</div>
		<div class="stat-info">
			<span class="stat-title">{{ title }}</span>
			<span class="stat-value">{{ value }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Stat",
	props: ["title", "value", "icon", "color"],
	computed: {
		style() {
			return "color: " + (this.color || "#000");
		},
	},
};
</script>

<style>
.stat {
	flex: 1;
	display: flex;
	justify-content: center;
	border-radius: 5px;
	margin-right: 20px;
	/* margin-bottom: 2px; */
	background-color: #fff;
	padding: 20px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.stat-icon {
	display: flex;
	align-items: center;
	font-size: 5rem;
	/* padding: 5px; */
}

.stat-info {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
}

.stat-info span {
	margin: 4px;
}
</style>
