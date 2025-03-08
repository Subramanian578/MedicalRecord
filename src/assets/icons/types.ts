import { AnimatableStringValue } from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
  scaleFactor?: number;
  color1?: string;
  color2?: string;
  size?: number;
  strokeWidth?: number;
}

export type TArrowbackIcon = ISvgProps & {
  rotate?: AnimatableStringValue;
};
