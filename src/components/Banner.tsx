import React, { useContext } from 'react';
import { Alert, AlertIcon, Fade, Box } from '@chakra-ui/react';

import { Context as nominationsContext } from '../contexts/NominationContext';

export const Banner = () => {
  const {
    state: { maxNomination },
  } = useContext(nominationsContext);

  return maxNomination ? (
    <Box gridArea="banner">
      <Fade in={maxNomination}>
        <Alert status="info">
          <AlertIcon />
          You have reached the allowed maximum of 5 nominations
        </Alert>
      </Fade>
    </Box>
  ) : null;
};
