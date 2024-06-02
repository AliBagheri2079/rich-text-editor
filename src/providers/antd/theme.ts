import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  cssVar: true,
  token: {
    fontFamily: 'var(--font-iran-yekan)',
    colorPrimary: '#1890FF',
    borderRadius: 2,
  },
  components: {
    Layout: {
      bodyBg: 'unset',
      siderBg: 'unset',
    },
    Select: {
      controlHeight: 40,
      multipleItemBg: 'var(--ant-color-primary-bg)',
      multipleItemBorderColor: 'var(--ant-color-primary-border)',
    },
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
