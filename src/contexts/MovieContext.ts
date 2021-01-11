import createDataContext from './createDataContext';
import moviesReducer, {
  IMoviesState,
  moviesActionTypes,
} from '../reducers/movies';
import { IMovie } from '../types/movie';

interface IActions {
  setMovies: (dispatch: React.Dispatch<any>) => (movie: IMovie[]) => void;
  startFetching: (dispatch: React.Dispatch<any>) => () => void;
  endFetching: (dispatch: React.Dispatch<any>) => () => void;
}

const startFetching = (dispatch: React.Dispatch<any>) => () => {
  dispatch({
    type: moviesActionTypes.IS_FETCHING,
  });
};

const endFetching = (dispatch: React.Dispatch<any>) => () => {
  dispatch({
    type: moviesActionTypes.END_FETCHING,
  });
};

const setMovies = (dispatch: React.Dispatch<any>) => (movies: IMovie[]) => {
  dispatch({
    type: moviesActionTypes.SET_MOVIES,
    payload: movies,
  });
};

export const { Provider, Context } = createDataContext<IActions, IMoviesState>(
  moviesReducer,
  { setMovies, startFetching, endFetching },
  { isLoading: false, movies: [] }
);
