import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home/Home";
import AdminPages from "../components/admin/AdminPages";

Vue.use(VueRouter);

const routes = [
	{
		name: "home",
		path: "/",
		component: Home,
	},
	{
		name: "admin",
		path: "/admin",
		components: AdminPages,
	},
];

export default new VueRouter({
	mode: "history",
	routes,
});
