import React, { useContext, useEffect } from 'react';
import { Stack, Text, useToast } from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';

import AppContext from '../contexts/AppContext';
import { CardSection } from './shared/CardSection';
import { useRequest } from '../hooks/useRequest';
import { Context as MovieContext } from '../contexts/MovieContext';
import { MovieListItem } from './MovieListItem';
import { MovieListItemLoading } from './MovieListItemLoading';

export const Results = () => {
  const { search } = useContext(AppContext);
  const {
    state: { movies, isLoading },
    setMovies,
    endFetching,
  } = useContext(MovieContext);

  const doToast = useToast();

  const { doRequest } = useRequest({
    url: 'https://www.omdbapi.com',
    method: 'GET',
  });

  const [debouncedText] = useDebounce(search, 1000);

  useEffect(() => {
    const fetchMovies = async () => {
      await doRequest({
        query: {
          apikey: process.env.API_KEY,
          s: search.trim(),
        },
        onSuccess: (data) => {
          const status = data.Response.toLowerCase();

          if (status === 'true') {
            setMovies(data.Search);
          } else if (status === 'false') {
            setMovies([]);
            data.Error &&
              doToast({
                title: data.Error,
                status: 'error',
                duration: 2000,
                position: 'top-right',
              });
          }
          endFetching();
        },
        onError: () => endFetching(),
      });
    };

    if (!search) {
      endFetching();
      return setMovies([]);
    }

    fetchMovies();
  }, [debouncedText]);

  return (
    <CardSection
      title={`Results ${search ? `for "${search}"` : ''}`}
      gridArea="results"
    >
      {isLoading ? (
        <MovieListItemLoading />
      ) : movies.length === 0 ? (
        <Text textAlign="center" color="gray.600">
          {search
            ? `Cannot find movie with title "${search}"`
            : 'Enter a movie title in the search bar'}
        </Text>
      ) : (
        <Stack>
          {movies.map((movie) => (
            <MovieListItem key={movie.imdbID} movie={movie} />
          ))}
        </Stack>
      )}
    </CardSection>
  );
};
