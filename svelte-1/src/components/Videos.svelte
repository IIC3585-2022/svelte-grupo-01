<script setup lang="ts">
    import {videos} from './../stores'
    import YoutubeVideo from './YoutubeVideo.svelte';
</script>
<template>
    <div class="w-full">
    <h1 class="title">Resultados de busqueda</h1>
    {#each $videos as video}
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