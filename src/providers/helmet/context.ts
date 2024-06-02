import type { HelmetServerState } from 'react-helmet-async';

type HelmetContext = {
  helmet?: HelmetServerState;
};

const context: HelmetContext = {};

export { context };
