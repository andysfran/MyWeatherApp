import React, { ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import { mainTheme } from '../theme/themes';

const WithProviders = ({children}: { children?: ReactElement|ReactElement[] }) => (
  <ThemeProvider theme={mainTheme}>
    {children}
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: WithProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}
