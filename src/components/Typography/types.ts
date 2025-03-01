// types
import type {TextProps} from 'react-native';

export type TTextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'label1'
  | 'label2'
  | 'label3'
  | 'footNote';

export type TTypography = TextProps & {
  label?: string | number;
  variant?: TTextVariant;
  color?: string;
  children?: React.ReactNode;
};
