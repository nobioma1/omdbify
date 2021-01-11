import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { Header } from '../Header';

interface IAppLayout {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: IAppLayout) => {
  return (
    <Box maxWidth={980} margin="0 auto" padding={2}>
      <Header />
      <Grid
        width="100%"
        gridGap={4}
        gridTemplateColumns={{ md: '1fr 1fr' }}
        gridTemplateAreas={{
          base: `
            'search'
            'banner'
            'results'
            'nominations'
            `,
          md: `
          'search search'
          'banner banner'
          'results nominations'
          `,
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};
