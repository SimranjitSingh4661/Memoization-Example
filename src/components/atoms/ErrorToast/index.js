import React from 'react';
import {StyleSheet, View} from 'react-native';
import StyledText from '../StyledText';
import {COLORS} from '../../../constants';
import {SharedStyles} from '../../../shared';
import {ERROR_MESSAGES} from '../../../constants/string';

const ErrorToast = ({message}) => {
  return (
    <View style={styles.container}>
      <StyledText textStyle={styles.message}>
        {message || ERROR_MESSAGES.SOMETHING_WENT_WRONG}
      </StyledText>
    </View>
  );
};

export default ErrorToast;

const styles = StyleSheet.create({
  container: {
    bottom: 30,
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: 20,
    position: 'absolute',
    alignItems: 'center',
    ...SharedStyles.shadow,
    justifyContent: 'center',
    backgroundColor: '#fca4a4',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.BORDER_RED,
  },
});
