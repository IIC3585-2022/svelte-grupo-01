<script lang="ts">
  import YoutubeVideo from "./YoutubeVideo.svelte";
  import {videos} from './stores';
  let searchVideos = []
  videos.subscribe(vs => searchVideos = vs);
</script>


<div class="w-full">
  <h1 class="title">Mis videos favoritos</h1>
  {#each searchVideos as video}
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