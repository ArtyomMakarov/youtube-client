import { ICustomCardsState, IInitialCustomCardsState } from '../state.models';
import { itemsActions, ActionCustomCards } from '../actions/items.actions';

export const initialState: IInitialCustomCardsState = {
    customCards: []
};

export const customCardsReducer = (
  state = initialState,
  action: ActionCustomCards
): ICustomCardsState => {
  switch (action.type) {
    case itemsActions.addCustomCards: {
      return {
        ...state,
          customCards: [...state.customCards, action.payload]
      };
    }
    default: {
      return state;
    }
  }
};
