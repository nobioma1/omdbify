import React, { useContext } from 'react';
import { Alert, AlertIcon, Flex, Text } from '@chakra-ui/react';

import { Context as nominationsContext } from '../contexts/NominationContext';

export const Banner = () => {
  const {
    state: { maxNomination },
  } = useContext(nominationsContext);

  return maxNomination ? (
    <Alert status="info" gridArea="banner" width="100%">
      <AlertIcon />
      You have reached the allowed maximum of 5 nominations
    </Alert>
  ) : null;
};
