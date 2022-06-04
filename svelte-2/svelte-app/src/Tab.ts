
export enum Tab {
  VIDEOS = 'videos',
  FAV = 'fav'
}
export type Video = {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string
  },
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: {
        url: string,
        width: Number,
        height: Number
      },
      medium: {
        url: string,
        width: Number,
        height: Number
      },
      high: {
        url: string,
        width: Number,
        height: Number
      }
    },
    channelTitle: string,
    liveBroadcastContent: string,
    publishTime: string
  }
}