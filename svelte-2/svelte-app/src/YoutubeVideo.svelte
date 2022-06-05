<script lang="ts">
  import { addFavVideo, deleteFavVideo, favVideos } from "./stores";
  import { Link } from "svelte-navigator";
  import type { Video } from "./Tab";
  export let video: Video = undefined;
  $: console.log(video)
</script>

<Link to={`/view/${video.id.videoId}`}>
  <div class="flex youtube-thumbnail" title={video.snippet.title}>
    <img 
      src={video.snippet.thumbnails.default.url}
      height={video.snippet.thumbnails.default.height?.toString() || 90}
      width={video.snippet.thumbnails.default.width?.toString() || 120}
      alt={video.snippet.thumbnails.default.url}
    />
    <div class="video-title">{video.snippet.title}</div>
    {#if !$favVideos.map(video => video.id.videoId).includes(video.id.videoId)}
    <button class='add-fav' on:click|stopPropagation|capture|preventDefault={() => addFavVideo(video)} > Añadir a favorito</button>
    {:else}
    <button class='delete-fav' on:click|stopPropagation|capture|preventDefault={() => deleteFavVideo(video)}> Eliminar de favoritos</button>
    {/if}
  </div>
</Link>

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