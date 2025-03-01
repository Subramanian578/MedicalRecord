import React, {memo} from 'react';
// Native components
import {Text} from 'react-native';
// styles
import useStyles from './styles';
// types
import {TTypography} from './types';

export const Typography: React.FC<TTypography> = memo(
  ({
    label = '',
    variant = 'body2',
    color,
    style,
    children,
    ...rest
  }) => {
    const styles = useStyles();

    return (
      <Text
        style={[
          styles[variant],
          {
            color: color ?? '#171A1C',
          },
          style,
        ]}
        {...rest}>
        {children ? children : label}
      </Text>
    );
  },
);
