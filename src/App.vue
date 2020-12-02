<template>
	<div id="app" :class="{ 'hide-menu': !isMenuVisible }">
		<Header title="dale q dale projetinho em vue" :hideToggle="false" />
		<Menu />
		<Content />
		<Footer />
	</div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
	name: "App",
	components: { Header, Menu, Content, Footer },
	computed: mapState(["isMenuVisible"]),
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
	height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr 40px;
	grid-template-columns: 300px 1fr;
	grid-template-areas:
		"header header"
		"menu content"
		"menu footer";
}

body {
	margin: 0px;
}

#app.hide-menu {
	grid-template-areas:
		"header header"
		"content content"
		"footer footer";
}
</style>
