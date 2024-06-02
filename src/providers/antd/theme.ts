import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  cssVar: true,
  token: {
    fontFamily: 'var(--font-iran-yekan)',
  },
  components: {
    Input: {
      paddingBlock: 8,
    },
    Button: {
      fontSize: 15,
      controlHeight: 40,
      textHoverBg: 'unset',
      colorBgTextActive: 'transparent',
    },
  },
};

export { theme };
