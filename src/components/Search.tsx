import React, { useContext, useEffect } from 'react';
import {
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { CardSection } from './shared/CardSection';
import AppContext from '../contexts/AppContext';
import { Context as MovieContext } from '../contexts/MovieContext';

export const Search = () => {
  const { search, setSearch } = useContext(AppContext);
  const { startFetching } = useContext(MovieContext);

  return (
    <CardSection gridArea="search">
      <Stack>
        <Text>Movie title</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.500" />}
          />
          <Input
            type="text"
            value={search}
            placeholder="Wonder woman"
            onChange={(e) => {
              startFetching();
              setSearch(e.target.value);
            }}
          />
        </InputGroup>
      </Stack>
    </CardSection>
  );
};
