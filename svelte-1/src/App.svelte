<script setup lang="ts">
import FavVideos from './components/favVideos.svelte';

import Search from './components/Search.svelte';
import ShowVideo from './components/ShowVideo.svelte';
import Videos from './components/Videos.svelte';
import {currentVideo, currentTab} from './stores'
import { Tab } from './StoreState';
	
	</script>
	
	<template>
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
	</template>
	
	<style>
	
	div.centered {
	  width: 70%;
	  margin: 0 auto;
	}
	</style>