<script setup lang="ts">
    const urlParams = new URLSearchParams(window.location.search);
    const currentVideo = urlParams.get('video');
</script>
  <template>
  <div class="w-full">
    <div class="yt-container">
      <iframe 
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  </div>
  </template>
  
  <style>
  div.w-full {
    margin-top: 20px;
    width: 100%;
    display: flex;
  }
  div.yt-container {
    margin: 0 auto;
  }
  </style>