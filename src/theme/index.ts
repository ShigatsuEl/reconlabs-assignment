import { DefaultTheme } from 'styled-components';
import media from './media';

const colors = {
  modal: 'rgba(0, 0, 0, 0.7)',
};

const sizes = {
  sm: '0.5rem',
  md: '0.7rem',
  lg: '1rem',
};

const weight = {
  normal: 'normal',
  bold: 'bold',
};

const theme: DefaultTheme = {
  colors,
  media,
  sizes,
  weight,
};

export default theme;
export type ColorType = keyof typeof colors;
export type SizeType = keyof typeof sizes;
export type WeightType = keyof typeof weight;
