import * as React from 'react';

import { HelmetProvider as HelmetProviderPrimitive } from 'react-helmet-async';

import { context } from './context';

const HelmetProvider = ({ children }: React.PropsWithChildren<unknown>) => (
  <HelmetProviderPrimitive context={context}>
    {children}
  </HelmetProviderPrimitive>
);

export { HelmetProvider };
