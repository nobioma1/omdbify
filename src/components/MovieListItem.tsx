import React, { useContext } from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Skeleton,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { IMovie } from '../types/movie';
import { Context as NominationContext } from '../contexts/NominationContext';

interface IMovieListItem {
  movie: IMovie;
  nominateScheme?: boolean;
}

export const MovieListItem = ({ movie, nominateScheme }: IMovieListItem) => {
  const {
    state: { nominations, maxNomination },
    nominate,
    removeNomination,
  } = useContext(NominationContext);
  const { Poster, Title, Year, imdbID } = movie;

  const inNominations = !!(nominations && nominations[imdbID]);

  return (
    <Flex
      backgroundColor="#eceef2"
      borderRadius={5}
      borderLeftWidth={4}
      borderColor="#00b0d5"
      minHeight="80px"
      alignItems="center"
      boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    >
      <Box width="55px" height="100%">
        <Image
          boxSize="sm"
          width="100%"
          height="100%"
          src={Poster}
          alt={Title}
          fallback={<Skeleton height="100%" width="100%" />}
        />
      </Box>
      <Wrap
        flex={1}
        padding={2}
        alignItems={{ sm: 'center' }}
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <WrapItem flex={1} flexDirection="column">
          <Text marginBottom={1}>
            {Title} ({Year})
          </Text>
        </WrapItem>
        <WrapItem alignItems="center">
          <Button
            colorScheme={nominateScheme ? 'red' : 'blue'}
            size="sm"
            isDisabled={nominateScheme ? false : inNominations || maxNomination}
            onClick={
              inNominations
                ? () => removeNomination(imdbID)
                : () => nominate(movie)
            }
          >
            {nominateScheme ? 'Remove' : 'Nominate'}
          </Button>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};
