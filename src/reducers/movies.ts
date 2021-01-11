import { IMovie } from '../types/movie';

export enum moviesActionTypes {
  IS_FETCHING = 'IS_FETCHING',
  END_FETCHING = 'END_FETCHING',
  SET_MOVIES = 'SET_MOVIES',
}

interface IAction {
  type: keyof typeof moviesActionTypes;
  payload?: any;
}

export interface IMoviesState {
  isLoading: boolean;
  movies: IMovie[];
}

export const movies = (state: IMoviesState, action: IAction) => {
  switch (action.type) {
    case moviesActionTypes.IS_FETCHING:
      return { ...state, isLoading: true };
    case moviesActionTypes.END_FETCHING:
      return { ...state, isLoading: false };
    case moviesActionTypes.SET_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default movies;
