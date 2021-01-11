import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { AppLayout } from './layouts/AppLayout';
import { Search } from './Search';
import { Results } from './Results';
import { Nominations } from './Nominations';
import { AppContextProvider } from '../contexts/AppContext';
import { Provider as MovieContextProvider } from '../contexts/MovieContext';
import { Provider as NominationContextProvider } from '../contexts/NominationContext';
import { Banner } from './Banner';

export const App = () => {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <MovieContextProvider>
          <NominationContextProvider>
            <AppLayout>
              <Search />
              <Banner />
              <Results />
              <Nominations />
            </AppLayout>
          </NominationContextProvider>
        </MovieContextProvider>
      </AppContextProvider>
    </ChakraProvider>
  );
};
