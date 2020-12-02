<template>
	<header class="header">
		<a class="toggle" @click="toggleMenu">
			<i class="fa fa-lg" :class="icon"></i>
		</a>
		<h1 class="title">{{ title }}</h1>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		title: String,
		hideToggle: Boolean,
	},
	computed: {
		icon() {
			return this.$store.state.isMenuVisible
				? "fa-angle-down"
				: "fa-angle-right";
		},
	},
	methods: {
		toggleMenu() {
			this.$store.commit("toggleMenu");
		},
	},
};
</script>

<style>
.header {
	grid-area: header;
	background: linear-gradient(to right, #1e469a, #49a7c1);

	display: flex;
	justify-content: center;
	align-items: center;
}

.title {
	font-size: 1.5rem;
	color: rgb(189, 253, 255);
	font-weight: 105;
	flex-grow: 1;
	text-align: center;
}

.title a {
	color: #fff;
	text-decoration: darkkhaki;
}

header.header > a.toggle {
	width: 4%;
	height: 100%;
	/* "desempurrar" o titulo */
	margin-right: -3%;
	z-index: 10;
	justify-self: flex-start;
	text-decoration: darkkhaki;

	display: flex;
	justify-content: center;
	align-items: center;
}

header.header > a.toggle:hover {
	background-color: rgba(0, 0, 0, 0.2);
}

.toggle:active {
	color: rgb(170, 169, 169);
}

.toggle {
	font-size: 1.4rem;
	color: rgb(163, 255, 250);
}
</style>
