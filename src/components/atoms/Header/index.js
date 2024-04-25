import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {COLORS, SCREEN_PADDING} from '../../../constants';
import StyledText from '../StyledText';
import {ChevronLeft} from 'lucide-react-native';

const Header = ({title, onBackPress = () => {}, hideBackBtn = false}) => {
  return (
    <View style={styles.container}>
      {hideBackBtn && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBackPress}>
          <ChevronLeft size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
      )}
      <StyledText textStyle={styles.title}>{title || ''}</StyledText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: SCREEN_PADDING,
  },
  title: {
    fontSize: 20,
    paddingLeft: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
