import { ISearchItem } from '../youtube/models/search-item.model';
import { ICustomCard } from '../youtube/models/customCard.model';

export interface IState {
  youtubeCards: ICustomCardsState;
  customCards: IYoutubeCardsState;
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
