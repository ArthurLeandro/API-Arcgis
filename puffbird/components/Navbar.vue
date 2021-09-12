<template>
	<nav :class="{navbar: $mq === 'sm'}">
			<NuxtLink class ="navbar__anchor" to="/">Home</NuxtLink>
			<NuxtLink class ="navbar__anchor" to="/about">About</NuxtLink>
			<NuxtLink class ="navbar__anchor" to="/map1">Map 1</NuxtLink>
			<NuxtLink class ="navbar__anchor" to="/map2">Map 2</NuxtLink>
			<NuxtLink class ="navbar__anchor" to="/map3">Map 3</NuxtLink>
	</nav>	
</template>

<script>
export default {
	components: true
}
</script>

<style>
nav {
	width:100%;
	display:flex;
	justify-content:space-between;
	flex-direction: row;
	background-color:var(--primary);
	padding: .6rem;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2),
0 2px 2px rgba(0, 0, 0, 0.14),
0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.navbar{
	flex-direction: column;
}

.navbar__anchor{
	flex: 1;
	text-align: center;
	margin: 0 5em 0 5em;
	padding: 0.25em;
	border: 1px solid #ddd;
	text-decoration: none;
	color: #ccc;
	transition: background-color 0.4s, color 0.2s;
}

.navbar__anchor:hover{
	background-color: var(--secondary);
	color: #fff;
}
</style>