<template>
	<div class="user-dropdown">
		<div class="user-button">
			<span class="d-none d-sm-block">{{ user.name }}</span>
			<div class="user-dropdown-img">
				<Gravatar :email="user.email" alt="usuario img" />
			</div>
			<i class="fa fa-angle-down"></i>
		</div>

		<div class="user-dropdown-content">
			<router-link to="/admin">
				<i class="fa fa-cogs"></i> Gerenciar
			</router-link>
			<router-link to="/"> <i class="fa fa-sign-out"></i> Sair </router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import Gravatar from "vue-gravatar";

export default {
	name: "UserDropdown",
	components: { Gravatar },
	computed: mapState(["user"]),
};
</script>

<style>
.user-dropdown {
	position: relative;
	height: 100%;
}

.user-button {
	display: flex;
	align-items: center;
	color: aliceblue;
	font-weight: 100;
	height: 100%;
	padding: 20px;
}

.user-dropdown:hover {
	background-color: rgba(0, 0, 0, 0.2);
}

.user-dropdown-img {
	margin: 0px 10px;
}

.user-dropdown-img > img {
	height: 50px;
	border-radius: 50%;
}

.user-dropdown-content {
	position: absolute;
	right: 0px;
	background-color: rgb(219, 219, 219);
	min-width: 170px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 10px;
	z-index: 1;

	display: flex;
	flex-direction: column;
	/* /* align-content: flex-start; */
	flex-wrap: wrap;

	visibility: hidden;
	opacity: 0;
	transition: visibility 0s, opacity 0.2s linear;
}

.user-dropdown:hover .user-dropdown-content {
	visibility: visible;
	opacity: 1;
}

.user-dropdown-content a {
	/* font-size: 1.2rem; */
	/* color: rgb(189, 253, 255); */
	font-weight: 550;
	/* display: flex;
	flex-direction: row;
	align-items: center; */
	color: #000;
	padding: 10px;
	border-radius: 5px;
}

.user-dropdown-content a:hover {
	background-color: rgb(192, 192, 192);
	text-decoration: none;
	color: #000;
}
</style>
