<script lang="ts">

  import { favVideos } from "./stores";
  import { Video } from "./Tab";
  import YoutubeVideo from "./YoutubeVideo.svelte";
  let favouriteVideos: Array<Video> = []
  favVideos.subscribe((fv) => favouriteVideos = fv);
</script>


<div class="w-full">
  <h1 class="title">Mis videos favoritos</h1>
  {#each favouriteVideos as video}
    <YoutubeVideo video={video} />
  {/each}
</div>

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