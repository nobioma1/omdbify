import React, { useContext, useEffect } from 'react';
import { Button, Stack, Text } from '@chakra-ui/react';

import { Context as NominationContext } from '../contexts/NominationContext';
import { MovieListItem } from './MovieListItem';
import { CardSection } from './shared/CardSection';
import { DeleteIcon } from '@chakra-ui/icons';

const KEY = 'save_nominations';

export const Nominations = () => {
  const {
    state: { nominations },
    setNominations,
    clearAllNominations,
  } = useContext(NominationContext);

  const hasNominations = Object.keys(nominations).length > 0;

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
    <CardSection
      title="Nominations"
      gridArea="nominations"
      titleBtn={
        hasNominations ? (
          <Button
            size="sm"
            rightIcon={<DeleteIcon />}
            colorScheme="red"
            variant="outline"
            onClick={clearAllNominations}
          >
            Clear
          </Button>
        ) : null
      }
    >
      {!hasNominations ? (
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
