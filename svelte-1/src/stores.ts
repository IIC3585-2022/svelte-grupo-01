import { writable } from 'svelte/store';
import { Tab, Video } from './StoreState';

function createVideos() {
	const { subscribe, set } = writable<Video[]>([]);

	return {
		subscribe,
		setVideos: (newVideos: Video[]) => set(newVideos)
	};
}

function createCurrentVideo() {
    const { subscribe, set } = writable<string | undefined>();

    return {
        subscribe,
        changeVideo: (newVideo: string | undefined) => set(newVideo)
    }
}

function createTab() {
    const { subscribe, set } = writable<Tab>(Tab.FAV);
    return {
        subscribe,
        changeTab: (tab: Tab) => set(tab)
    }
}

function createFavVideos() {
    const { subscribe, update } = writable<Video[]>(
        window.localStorage.getItem('favVideos') !== null ? 
            JSON.parse(window.localStorage.getItem('favVideos')!) 
            : 
            []
        );
    return {
        subscribe,
        addFavVideo: (video: Video) => update(favVideos => {
            const newFavVideos = [...favVideos, video];
            window.localStorage.setItem('favVideos', JSON.stringify(newFavVideos));
            return newFavVideos
        }),
        deleteFavVideo: (video: Video) => update(favVideos => {
            const newFavVideos = favVideos.filter((vid) => vid.id.videoId !== video.id.videoId);
            window.localStorage.setItem('favVideos', JSON.stringify(newFavVideos));
            return newFavVideos;
        })
        
    }
}

export const videos = createVideos();
export const currentVideo = createCurrentVideo();
export const currentTab = createTab();
export const favVideos = createFavVideos();


