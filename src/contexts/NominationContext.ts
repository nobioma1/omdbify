import createDataContext from './createDataContext';
import nominationsReducer, {
  INominationsState,
  nominationsActionTypes,
} from '../reducers/nominations';
import { IMovie } from '../types/movie';

interface IActions {
  setNominations: (
    dispatch: React.Dispatch<any>
  ) => (nominations: INominationsState) => void;
  nominate: (dispatch: React.Dispatch<any>) => (movie: IMovie) => void;
  removeNomination: (dispatch: React.Dispatch<any>) => (id: string) => void;
}

const setNominations = (dispatch: React.Dispatch<any>) => (
  nominations: INominationsState
) => {
  dispatch({
    type: nominationsActionTypes.SET_NOMINATIONS,
    payload: nominations,
  });
};

const nominate = (dispatch: React.Dispatch<any>) => (movie: IMovie) => {
  dispatch({
    type: nominationsActionTypes.SET_NOMINATION,
    payload: movie,
  });
};

const removeNomination = (dispatch: React.Dispatch<any>) => (id: string) => {
  dispatch({
    type: nominationsActionTypes.REMOVE_NOMINATION,
    payload: id,
  });
};

export const { Provider, Context } = createDataContext<
  IActions,
  INominationsState
>(
  nominationsReducer,
  { setNominations, nominate, removeNomination },
  { nominations: {}, maxNomination: false }
);
