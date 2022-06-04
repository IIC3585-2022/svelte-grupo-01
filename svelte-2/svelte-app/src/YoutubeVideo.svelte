<script lang="ts">
  import { showVideo, addFavVideo, deleteFavVideo, favVideos } from "./stores";
  import { Video } from "./Tab";
  export let video: Video;
  let favouriteVideos: Array<Video> = []
  favVideos.subscribe((fv) => favouriteVideos = fv);
</script>

<div class="flex youtube-thumbnail" on:click={() => showVideo(video.id.videoId)} title={video.snippet.title}>
  <img 
    src={video.snippet.thumbnails.default.url}
    height={video.snippet.thumbnails.default.height.toString()}
    width={video.snippet.thumbnails.default.width.toString()}
    alt={video.snippet.thumbnails.default.url}
  />
  <div class="video-title">{video.snippet.title}</div>
  {#if !favouriteVideos.map(video => video.id.videoId).includes(video.id.videoId)}
  <button class='add-fav' on:click|stopPropagation={() => addFavVideo(video)} > Añadir a favorito</button>
  {:else}
  <button class='delete-fav' on:click|stopPropagation={() => deleteFavVideo(video)}> Eliminar de favoritos</button>
  {/if}
</div>

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