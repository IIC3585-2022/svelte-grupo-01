<script lang="ts">
	import Search from "./Search.svelte"
	import FavVideos from "./FavVideos.svelte"
	import ShowVideo from "./ShowVideo.svelte"
	import Videos from "./Videos.svelte"
	import {Tab} from './Tab'
	import {currentTab, currentVideo} from './stores';
</script>

<Search />
<div class="centered">
	{#if $currentVideo === undefined && $currentTab === Tab.VIDEOS}
		<Videos />
	{:else if $currentVideo === undefined && $currentTab === Tab.FAV}
		<FavVideos />
	{:else if $currentVideo !== undefined}
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