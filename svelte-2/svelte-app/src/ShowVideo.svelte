<script lang="ts">
  export let id: string = "";
</script>

<div class="w-full">
  <div class="yt-container">
    <iframe width="640" height="360" src={`https://www.youtube.com/embed/${id}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>