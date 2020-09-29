import { ISearchItem } from '../youtube/models/search-item.model';
import { ICustomCard } from '../youtube/models/customCard.model';

export interface IState {
  youtubeCards: IYoutubeCardsState;
  customCards: ICustomCardsState;
}

export interface ICustomCardsState {
  customCards: Array<ICustomCard>;
}

export interface IYoutubeCardsState {
  youtubeCards: ISearchItem[];
}

export interface IInitialCustomCardsState {
    customCards: [];
}

export interface IInitialYoutubeCardsState {
  youtubeCards: [];
}
