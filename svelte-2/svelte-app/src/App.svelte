<script lang="ts">
	import Search from "./Search.svelte"
	import FavVideos from "./FavVideos.svelte"
	import ShowVideo from "./ShowVideo.svelte"
	import Videos from "./Videos.svelte"
	import { Route, Router } from 'svelte-navigator'
</script>
<Router>
<Search />
<div class="centered">
		<Route>
			<FavVideos />
		</Route>
		<Route path="/search/:query" let:params>
			<Videos query={params.query}/>
		</Route>
		<Route path="/view/:id" let:params>
			<ShowVideo id={params.id}/>
		</Route>
</div>
</Router>

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