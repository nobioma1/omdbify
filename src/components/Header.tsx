import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box>
      <Heading as="h1" fontSize="1.8rem" marginY={5}>
        The Shoppies
      </Heading>
    </Box>
  );
};
