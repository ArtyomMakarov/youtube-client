export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
    [key: string]: {
      url: string;
      width: number;
      height: number
      }
    }
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {[key: string]: string};
  defaultAudioLanguage: string;
  statistics: {[key: string]: string};
}
