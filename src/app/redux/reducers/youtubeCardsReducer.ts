import { IYoutubeCardsState, IInitialYoutubeCardsState } from '../state.models';
import { itemsActions, ActionYoutubeCards } from '../actions/items.actions';

export const initialState: IInitialYoutubeCardsState = {
    youtubeCards: [],
};

export const youtubeCardsReducer = (
  state = initialState,
  action: ActionYoutubeCards
): IYoutubeCardsState => {
  switch (action.type) {
    case itemsActions.addYoutubeCards: {
      return {
        ...state,
          youtubeCards: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
