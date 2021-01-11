import React from 'react';
import { Box, Divider, Flex, Grid, Heading } from '@chakra-ui/react';

interface ICardSection {
  children: React.ReactNode;
  title?: string;
  gridArea?: string;
  titleBtn?: React.ReactNode;
}

export const CardSection = ({
  children,
  title,
  titleBtn,
  ...styles
}: ICardSection) => {
  return (
    <Grid
      {...styles}
      padding={5}
      borderRadius={3}
      backgroundColor="white"
      height="fit-content"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
    >
      {title && (
        <Box marginBottom={3}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            minHeight="45px"
          >
            <Heading as="h3" fontSize="1.15rem">
              {title}
            </Heading>
            {titleBtn}
          </Flex>
          <Divider />
        </Box>
      )}
      {children}
    </Grid>
  );
};
