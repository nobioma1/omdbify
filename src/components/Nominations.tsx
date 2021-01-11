import React, { useContext, useEffect } from 'react';
import { Stack, Text } from '@chakra-ui/react';

import { Context as NominationContext } from '../contexts/NominationContext';
import { MovieListItem } from './MovieListItem';
import { CardSection } from './shared/CardSection';
export const Nominations = () => {
  const {
    state: { nominations },
    setNominations,
  } = useContext(NominationContext);

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
