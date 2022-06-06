<script setup lang="ts">
  const urlParams = new URLSearchParams(window.location.search);
  const currentVideo = urlParams.get("video");
  let w;
</script>

<div class="w-full">
  <div class="yt-container" bind:clientWidth={w}>
    <iframe
      width={w}
      height={w / 640 * 360}
      src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</div>

<style>
  div.w-full {
    margin-top: 20px;
    width: 100%;
    display: flex;
  }
  div.yt-container {
    margin: 0 auto;
    width: 100%;
  }
</style>
