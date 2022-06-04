import { writable } from 'svelte/store';
import { Tab, Video } from './Tab';

export const currentVideo = writable(undefined);
export const videos = writable([]);
export const currentTab = writable(Tab.FAV);
export const favVideos = writable<Array<Video>>(JSON.parse(window.localStorage.getItem('favVideos')) || []); // TODO: localstorage

export async function searchYoutube(query: string) {
  console.log("buscando" + query)
  const result = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=50&key=AIzaSyA-tvEokrKF-vdJuqA-MXucQclYYiivAXI`)
  const response = await result.json();
  currentVideo.set(undefined);
  currentTab.set(Tab.VIDEOS);
  videos.set(response.items);
};

export function back() {
  currentVideo.set(undefined);
  currentTab.set(Tab.FAV);
  videos.set([]);
}

export function showVideo(videoId){
  videos.set([]);
  currentVideo.set(videoId);
}
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