import { px2remTransformer } from '@ant-design/cssinjs';

const px2rem = px2remTransformer({
  rootValue: 16,
});

const transformers = [px2rem];

export { transformers };
