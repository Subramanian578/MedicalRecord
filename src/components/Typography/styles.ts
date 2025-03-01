import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';

export default () =>
  StyleSheet.create({
    h1: {
      fontSize: moderateScale(26),
      lineHeight: moderateScale(32),
    },
    h2: {
      fontSize: moderateScale(22),
      lineHeight: moderateScale(28),
    },
    h3: {
      fontSize: moderateScale(18),
      lineHeight: moderateScale(24),
    },
    h4: {
      fontSize: moderateScale(16),
      lineHeight: moderateScale(20),
    },
    h5: {
      fontSize: moderateScale(14),
      lineHeight: moderateScale(16),
    },
    h6: {
      fontSize: moderateScale(12),
      lineHeight: moderateScale(14),
    },
    body1: {
      fontSize: moderateScale(16),
      lineHeight: moderateScale(24),
    },
    body2: {
      fontSize: moderateScale(14),
      lineHeight: moderateScale(22),
    },
    body3: {
      fontSize: moderateScale(12),
      lineHeight: moderateScale(20),
    },
    label1: {
      fontSize: moderateScale(16),
      lineHeight: moderateScale(20),
    },
    label2: {
      fontSize: moderateScale(14),
      lineHeight: moderateScale(18),
    },
    label3: {
      fontSize: moderateScale(12),
      lineHeight: moderateScale(16),
    },
    footNote: {
      fontSize: moderateScale(10),
      lineHeight: moderateScale(12),
    },
  });
