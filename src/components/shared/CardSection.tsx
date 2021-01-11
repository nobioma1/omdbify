import { Box, Divider, Grid, Heading } from '@chakra-ui/react';
import React from 'react';

interface ICardSection {
  children: React.ReactNode;
  title?: string;
  gridArea?: string;
}

export const CardSection = ({ children, title, ...styles }: ICardSection) => {
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
          <Heading as="h3" fontSize="1.15rem">
            {title}
          </Heading>
          <Divider />
        </Box>
      )}
      {children}
    </Grid>
  );
};
