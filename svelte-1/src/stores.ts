import { writable } from "svelte/store";
import type { Video } from "./StoreState";

function createFavVideos() {
  const { subscribe, update } = writable<Video[]>(
    window.localStorage.getItem("favVideos") !== null
      ? JSON.parse(window.localStorage.getItem("favVideos")!)
      : []
  );
  return {
    subscribe,
    addFavVideo: (video: Video) =>
      update((favVideos) => {
        const newFavVideos = [...favVideos, video];
        window.localStorage.setItem("favVideos", JSON.stringify(newFavVideos));
        return newFavVideos;
      }),
    deleteFavVideo: (video: Video) =>
      update((favVideos) => {
        const newFavVideos = favVideos.filter(
          (vid) => vid.id.videoId !== video.id.videoId
        );
        window.localStorage.setItem("favVideos", JSON.stringify(newFavVideos));
        return newFavVideos;
      }),
  };
}

export const favVideos = createFavVideos();
