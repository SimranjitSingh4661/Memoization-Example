import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT_SIZE, COLORS} from '../../../constants';

const EmptyComponent = () => {
  return (
    <View>
      <Text style={styles.text}>{'- No Data Available -'}</Text>
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.MX,
  },
});
