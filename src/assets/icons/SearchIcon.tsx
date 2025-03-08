import React from 'react';
// SVG
import Svg, {Path} from 'react-native-svg';
// types
import {ISvgProps} from './types';
// utils
import {moderateScale} from '../../utils';

export const SearchIcon = ({
  size = 12,
  color = '#98A3AD',
  scaleFactor,
  ...rest
}: ISvgProps): JSX.Element => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width={moderateScale(size, scaleFactor)}
      height={moderateScale(size, scaleFactor)}
      fill="none"
      {...rest}>
      <Path
        d="M11.333 11.333L8.755 8.755m1.393-3.348a4.74 4.74 0 11-9.482 0 4.74 4.74 0 019.482 0z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
