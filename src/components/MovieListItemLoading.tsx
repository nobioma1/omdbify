import React from 'react';
import { Box, Flex, Skeleton, Wrap, WrapItem } from '@chakra-ui/react';

export const MovieListItemLoading = () => {
  return (
    <Flex minHeight="80px" alignItems="center">
      <Box width="55px" height="100%">
        <Skeleton height="100%">Image</Skeleton>
      </Box>
      <Wrap
        flex={1}
        padding={2}
        alignItems={{ sm: 'center' }}
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <WrapItem flex={1} flexDirection="column">
          <Skeleton width="100%" marginBottom={2}>
            Title
          </Skeleton>
          <Skeleton width="100%" marginBottom={2}>
            Title
          </Skeleton>
        </WrapItem>
        <WrapItem alignItems="center">
          <Skeleton width="80px">Button</Skeleton>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};
