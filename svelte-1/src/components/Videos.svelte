<script setup lang="ts">
  import YoutubeVideo from "./YoutubeVideo.svelte";
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search");
  async function searchYoutube(searchQuery: string) {
    let videos = [];
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&part=snippet&maxResults=50&key=AIzaSyDIq4ZGvS8Z3FXABUHvBFvSAAHXMALeTmA`
    );
    const data = await response.json();
    videos = data.items;
    return videos;
  }
</script>

<div class="w-full">
  <h1 class="title">Resultados de busqueda</h1>
  {#await searchYoutube(searchQuery)}
    <div class="searching-text">Buscando...</div>
  {:then videos}
    {#each videos as video (video)}
      <YoutubeVideo {video} />
    {/each}
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
