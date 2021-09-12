<template>
	<div class="app">
		<Navbar/>
		<Nuxt/>
		<!---p>{{$mq}}</!---p>
		<h1 v-if="$mq === 'lg'">Desktop</h1>
		<h1 v-else-if="$mq === 'md'">Tablet</h1>
		<h1--- v-else>mobile</h1--->
	</div>
</template>

<script>
import "../components/Navbar.vue";
	export default {
	}
</script>

<style>
:root {
	--primary:#4F3750;
	--secondary:#CB9870;
	--complementary:#8D8960;
	--background:#AAA1A060;
}

body {
	padding:0;
	margin:0;
}
</style>
