<script lang="ts">
	import Search from "./Search.svelte"
	import FavVideos from "./FavVideos.svelte"
	import ShowVideo from "./ShowVideo.svelte"
	import Videos from "./Videos.svelte"
	import {Tab} from './Tab'
	import {currentTab, currentVideo} from './stores';
	let tab = Tab.FAV;
	currentTab.subscribe((newTab) => tab = newTab);
	let video = undefined;
	currentVideo.subscribe((v => video = v));
</script>

<Search />
<div class="centered">
	{#if video === undefined && tab === Tab.VIDEOS}
		<Videos />
	{:else if video === undefined && tab === Tab.FAV}
		<FavVideos />
	{:else if video !== undefined}
		<ShowVideo />
	{/if}
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #181818;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	
	div.centered {
		width: 70%;
		margin: 0 auto;
	}
	</style>