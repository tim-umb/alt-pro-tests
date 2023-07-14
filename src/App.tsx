import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/DesignSystemLightTheme';
import EntityContainer from 'src/components/EntityContainer/EntityContainer';
import PageTemplatePrototype from 'src/components/PageTemplatePrototype/PageTemplatePrototype';
import useMenuItem from 'src/components/MenuItem/useMenuItem';

function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route path="/" element={<PageTemplatePrototype />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
