import { ISearchItem } from '../../youtube/models/search-item.model';
import { Action } from '@ngrx/store';
import { ICustomCard } from '../../youtube/models/customCard.model';

export enum itemsActions {
  addYoutubeCards = '[Header Page] ADD_YOUTUBE_CARDS',
  addCustomCards = '[Admin Page] ADD_CUSTOM_CARDS'
}

export class AddYoutubeCardsAction implements Action {
  public readonly type: string = itemsActions.addYoutubeCards;

  constructor(public payload: ISearchItem[]) {}
}

export class AddCustomCardsAction implements Action {
  public readonly type: string = itemsActions.addCustomCards;

  constructor(public payload: ICustomCard) {}
}

export type ActionYoutubeCards = AddYoutubeCardsAction;
export type ActionCustomCards = AddCustomCardsAction;
