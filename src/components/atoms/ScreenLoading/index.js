import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {COLORS, SCREEN_PADDING} from '../../../constants';
import ScreenContainer from '../ScreenContainer';
import Header from '../Header';

const ScreenLoading = ({title, hideBackBtn}) => {
  return (
    <ScreenContainer>
      <Header title={title} hideBackBtn={true} />
      <ActivityIndicator
        size={'large'}
        color={COLORS.BLUE}
        style={styles.container}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: SCREEN_PADDING,
    paddingHorizontal: SCREEN_PADDING,
  },
});

export default ScreenLoading;
