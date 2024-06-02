import * as React from 'react';

import { AntdProvider } from './antd';
import { HelmetProvider } from './helmet';

const Providers = ({ children }: React.PropsWithChildren<unknown>) => (
  <AntdProvider>
    <HelmetProvider>{children}</HelmetProvider>
  </AntdProvider>
);

export { Providers };
