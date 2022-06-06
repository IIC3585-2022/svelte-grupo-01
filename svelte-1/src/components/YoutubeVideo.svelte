<script lang="ts">
  import { navigate } from "svelte-routing";
  import type { Video } from "../StoreState";
  import { favVideos } from "./../stores";
  export let video: Video;

  function showVideo() {
    navigate(`/watch?video=${video.id.videoId}`);
  }
  function addFavVideo(e: MouseEvent) {
    e.stopPropagation();
    favVideos.addFavVideo(video);
  }
  function deleteFavVideo(e: MouseEvent) {
    e.stopPropagation();
    favVideos.deleteFavVideo(video);
  }
</script>

<template>
  <div
    class="flex youtube-thumbnail"
    on:click={showVideo}
    title={video.snippet.title}
  >
    <img
      src={video.snippet.thumbnails.default.url}
      height={`${video.snippet.thumbnails.default.height}`}
      width={`${video.snippet.thumbnails.default.width}`}
      alt="video title"
    />
    <div class="video-title">{video.snippet.title}</div>
    {#if !$favVideos.some((vid) => vid.id.videoId === video.id.videoId)}
      <button class="add-fav" on:click={addFavVideo}> Añadir a favorito</button>
    {:else}
      <button class="delete-fav" v-else on:click={deleteFavVideo}>
        Eliminar de favoritos</button
      >
    {/if}
  </div>
</template>

<style>
  div.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  div.youtube-thumbnail {
    margin-top: 10px;
    cursor: pointer;
    margin-right: 10px;
    overflow-wrap: break-word;
  }

  div.video-title {
    color: white;
    width: 70%;
  }

  button.add-fav {
    height: 40px;
    width: 140px;
    background-color: green;
    color: white;
  }

  button.delete-fav {
    height: 40px;
    width: 140px;
    background-color: red;
    color: white;
  }
</style>
