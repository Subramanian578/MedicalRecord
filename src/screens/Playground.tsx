import {View} from 'react-native';
import React from 'react';
import {Typography} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from '../utils';

export const PlayGround = () => {
  return (
    <SafeAreaView>
      <View
        style={{paddingHorizontal: moderateScale(16), gap: moderateScale(8)}}>
        <Typography label={'Monica'} variant="h1" />
        <Typography label={'Muguntha'} variant="h2" />
        <Typography label={'Monica'} variant="h3" />
        <Typography label={'Muguntha'} variant="h4" />
        <Typography label={'Monica'} variant="h5" />
        <Typography label={'Muguntha'} variant="h6" />
      </View>
    </SafeAreaView>
  );
};
