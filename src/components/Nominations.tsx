import React, { useContext, useEffect } from 'react';
import { Stack, Text } from '@chakra-ui/react';

import { Context as NominationContext } from '../contexts/NominationContext';
import { MovieListItem } from './MovieListItem';
import { CardSection } from './shared/CardSection';

const KEY = 'save_nominations';

export const Nominations = () => {
  const {
    state: { nominations },
    setNominations,
  } = useContext(NominationContext);

  useEffect(() => {
    const loadNominations = () => {
      const data = window.localStorage.getItem(KEY);
      if (data) {
        const loaded = JSON.parse(data);
        setNominations(loaded);
      }
    };

    loadNominations();
  }, []);

  useEffect(() => {
    const saveNominations = () => {
      if (Object.keys(nominations).length !== 0) {
        window.localStorage.setItem(KEY, JSON.stringify(nominations));
      } else {
        window.localStorage.removeItem(KEY);
      }
    };
    window.addEventListener('beforeunload', saveNominations);
    return () => {
      window.removeEventListener('beforeunload', saveNominations);
    };
  }, [nominations]);

  return (
    <CardSection title="Nominations" gridArea="nominations">
      {Object.keys(nominations).length === 0 ? (
        <Text textAlign="center">You've not added any nomination</Text>
      ) : (
        <Stack>
          {Object.values(nominations).map((movie) => (
            <MovieListItem key={movie.imdbID} movie={movie} nominateScheme />
          ))}
        </Stack>
      )}
    </CardSection>
  );
};
