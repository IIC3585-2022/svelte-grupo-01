<script setup lang="ts">
  import YoutubeVideo from "./YoutubeVideo.svelte";
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search");
  let videos = [];
  fetch(
    `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&part=snippet&maxResults=50&key=AIzaSyA-tvEokrKF-vdJuqA-MXucQclYYiivAXI`
  )
    .then((data) => data.json())
    .then((vids) => {
      videos = [...vids.items];
    });
</script>

<template>
  <div class="w-full">
    <h1 class="title">Resultados de busqueda</h1>
    {#each videos as video}
      <YoutubeVideo {video} />
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
