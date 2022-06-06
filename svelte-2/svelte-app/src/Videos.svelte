<script lang="ts">
  import type { Video } from "./Tab";

  export let query: string;
  import YoutubeVideo from "./YoutubeVideo.svelte";

  async function searchYoutube(query): Promise<Video[]> {
    console.log("buscando" + query)
    const result = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=50&key=AIzaSyA-tvEokrKF-vdJuqA-MXucQclYYiivAXI`)
    const response = await result.json();
    return response.items;
  }
</script>


<div class="w-full">
  <h1 class="title">Búsqueda: {query}</h1>
  {#await searchYoutube(query)}
  <div class="searching-text">
    Buscando...
  </div>
  {:then videos} 
  {console.log(videos)}
    {#each videos as video (video)}
      <YoutubeVideo video={video} />
    {/each}
  {:catch}
  hola
  {/await}
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
  div.searching-text {
    color: #ffffff;
  }
  </style>