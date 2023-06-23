import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/DesignSystemLightTheme';
import EntityContainer from './components/EntityContainer/EntityContainer';
import { EntityContainerProps } from './types';

function App() {
  const data = { isClose: false };
  const toggleIsClose = () => {};

  const entityContainerProps: EntityContainerProps = {
    data,
    toggleIsClose,
  };

  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route path="/*" element={<EntityContainer {...entityContainerProps} />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
