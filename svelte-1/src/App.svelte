<script setup lang="ts">
	import { Router, Route } from "svelte-routing";
	import FavVideos from './components/favVideos.svelte';
	import Search from './components/Search.svelte';
	import ShowVideo from './components/ShowVideo.svelte';
	import Videos from './components/Videos.svelte';

	export const url = "";
</script>

<template>
	<Router url={url}>
		<Search />
		<div class="centered">
		<Route path="/videos"><Videos /></Route>
		<Route path="/"><FavVideos /></Route>
		<Route path="/watch"><ShowVideo /></Route>
		</div>
	</Router>
</template>
	
<style>
	
	div.centered {
	  width: 70%;
	  margin: 0 auto;
	}
</style>