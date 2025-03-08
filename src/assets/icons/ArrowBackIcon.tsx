import React from 'react';
// SVG
import Svg, {Path} from 'react-native-svg';
// types
import {TArrowbackIcon} from './types';
// utils
import {getModerateScale} from '../../utils';

export const ArrowbackIcon = ({
  width = 24,
  height = 24,
  color = '#464E57',
  scaleFactor,
  rotate,
  style,
  ...rest
}: TArrowbackIcon): JSX.Element => {
  return (
    <Svg
      width={getModerateScale(width, scaleFactor)}
      height={getModerateScale(height, scaleFactor)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={[{transform: [{rotate: rotate ? rotate : '0deg'}]}, style]}
      {...rest}>
      <Path
        d="M15 18l-5.685-5.293a.952.952 0 010-1.414L15 6"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};
