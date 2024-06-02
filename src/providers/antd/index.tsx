import * as React from 'react';

import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, notification } from 'antd';
import faIR from 'antd/locale/fa_IR';

import { theme } from './theme';
import { transformers } from './transformers';

notification.config({
  rtl: true,
});

const AntdProvider = ({ children }: React.PropsWithChildren<unknown>) => (
  <ConfigProvider theme={theme} locale={faIR} direction='rtl'>
    <StyleProvider transformers={transformers} hashPriority='high'>
      {children}
    </StyleProvider>
  </ConfigProvider>
);

export { AntdProvider };
