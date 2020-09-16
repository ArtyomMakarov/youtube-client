import { createFeatureSelector } from '@ngrx/store';
import {IState, IYoutubeCardsState, ICustomCardsState} from '../state.models';

export const selectYoutubeCards = createFeatureSelector<IState, IYoutubeCardsState>('youtubeCards');
export const selectCustomCards = createFeatureSelector<IState, ICustomCardsState>('customCards');
