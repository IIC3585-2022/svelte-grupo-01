<script setup lang="ts">
    import {favVideos} from './../stores'
    import YoutubeVideo from './YoutubeVideo.svelte';
</script>
<template>
    <div class="w-full">
    <h1 class="title">Mis videos favoritos</h1>
    {#each $favVideos as video}
        <YoutubeVideo video={video} />
    {/each}
    </div>
</template>

<style>
  div.w-full {
    width: 100%;
    overflow-wrap: break-word;
  }
  
  h1.title {
    color: white;
    width: 100%;
    text-align: center;
    display: block;
  }
</style>