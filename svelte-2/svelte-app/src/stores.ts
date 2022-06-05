import { writable } from 'svelte/store';
import type { Video } from './Tab';

export const favVideos = writable<Array<Video>>(JSON.parse(window.localStorage.getItem('favVideos')) || []); // TODO: localstorage

export function addFavVideo(video: Video){
  favVideos.update(favVideos => {
    let newVideos = [...favVideos, video];
    window.localStorage.setItem('favVideos', JSON.stringify(newVideos));
    return newVideos;
  });
}
export function deleteFavVideo(video: Video){
  favVideos.update(favVideos => {
    let newVideos = favVideos.filter((v) => v.id.videoId !== video.id.videoId);
    window.localStorage.setItem('favVideos', JSON.stringify(newVideos));
    return newVideos;
  });
}