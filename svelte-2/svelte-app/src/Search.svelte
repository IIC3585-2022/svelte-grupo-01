<script lang="ts">
  import { Link, useNavigate } from "svelte-navigator"
  let query: string = "";
  const navigate = useNavigate();
  function handleKeyup(e: KeyboardEvent, query: string) {
    if(e.key === "Enter")
      navigate(`/search/${query}`)
  }
</script>
<div class="search-bar flex">
  <div class="left">
    <button class="left-button">
      <Link to="/">
          <img src="/MyTube.png" class="logo" alt="logo" />
      </Link>
  </button>
  </div> 
  <div class="right flex">
    <div class="search-input" >
    <input bind:value={query} class="no-display" on:keyup={e => handleKeyup(e, query)} placeholder="Buscar" />
    </div>
    <button class="search-button">
      <Link to={`/search/${query}`}>
        Buscar
      </Link>
    </button>
  </div>
   <div class="flex">
    <button class="fav-button">
      <Link to="/">
        Ver mis videos favoritos
      </Link>
    </button>
  </div>
</div>
<style>

div.left {
  width: 15%;
  display: flex;
}
:global(button.fav-button a) {
  color: #ffffff;
  text-decoration: none;
}
div.search-bar {
  background-color: #202020;
  height: 50px;
  width: 100%;
}
div.right {
  width: 70%;
  margin: 0 0 auto 0;
  height: calc(100% - 10px);
  padding: 5px 0;
}
button.left-button {
  outline: none;
  border: 0;
  border-radius: 0;
  margin: auto auto auto 15px;
  background-color: transparent;
  cursor: pointer;
}
div.search-input {
  height: 90%;
  padding: 0 5px;
  width: 80%;
  margin: auto 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border: 1px solid #383838;
  background-color: #121212;
  color: #e2e2e2;
}
input.no-display {
  height: 100%;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  color: #e2e2e2;
}

input.no-display:focus {
  border: 0;
  outline: none;
}
img.logo {
  width: 100%;
  margin: auto 0;
}

.flex {
  display: flex;
}

button.search-button {
  outline: none;
  border: 0;
  border-radius: 0;
  margin: 0;
  background-color: #323232;
  color: #ffffff !important;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
}
:global(button.search-button a) {
  color: #ffffff;
}

button.fav-button {
  outline: none;
  border: 0;
  border-radius: 0;
  background-color: #ff0000;
  color: #ffffff;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
}
</style>