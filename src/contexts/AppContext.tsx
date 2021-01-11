import React, { useReducer, useState } from 'react';

import resultsReducer from '../reducers/movies';
import nominationsReducer from '../reducers/nominations';

interface IAppContext {
  search: string;
  setSearch: (param: string) => void;
}

interface IAppContextProvider {
  children: React.ReactNode;
}

const AppContext = React.createContext<IAppContext>(null!);

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [search, setSearch] = useState('');

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch: (param: string) => setSearch(param),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
