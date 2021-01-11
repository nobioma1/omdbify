import { INomination } from '../types/nomination';

export enum nominationsActionTypes {
  SET_NOMINATIONS = 'SET_NOMINATIONS',
  SET_NOMINATION = 'SET_NOMINATION',
  REMOVE_NOMINATION = 'REMOVE_NOMINATION',
  CLEAR_ALL_NOMINATIONS = 'CLEAR_ALL_NOMINATIONS',
}

interface IAction {
  type: keyof typeof nominationsActionTypes;
  payload?: any;
}

export interface INominationsState {
  nominations: INomination;
  maxNomination: boolean;
}

const isMaximum = (payload: INomination) => {
  const maximumNominations = 5;
  return Object.keys(payload).length === maximumNominations;
};

export const nominations = (state: INominationsState, action: IAction) => {
  switch (action.type) {
    case nominationsActionTypes.SET_NOMINATIONS:
      return {
        ...state,
        nominations: action.payload,
        maxNomination: isMaximum(action.payload),
      };

    case nominationsActionTypes.SET_NOMINATION:
      const update = {
        ...state.nominations,
        [action.payload.imdbID]: action.payload,
      };
      return {
        ...state,
        nominations: update,
        maxNomination: isMaximum(update),
      };

    case nominationsActionTypes.REMOVE_NOMINATION:
      const remaining = state.nominations;
      delete remaining[action.payload];

      return {
        ...state,
        nominations: { ...remaining },
        maxNomination: isMaximum(remaining),
      };

    case nominationsActionTypes.CLEAR_ALL_NOMINATIONS:
      return {
        ...state,
        nominations: {},
        maxNomination: false,
      };
    default:
      return state;
  }
};

export default nominations;
