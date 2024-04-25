import React, {memo, useMemo} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {StyledText} from '../atoms';
import {COLORS} from '../../constants';
import {SharedStyles} from '../../shared';
import {STRINGS} from '../../constants/string';
import {computeDetails} from '../../utils';

const HomePostCard = ({
  id,
  title,
  body,
  userId,
  onButtonPress,
  selectedPost,
}) => {
  const details = useMemo(() => computeDetails(id), [id]);
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>{title}</StyledText>
      <StyledText style={styles.body}>{body}</StyledText>
      <View style={styles.footer}>
        <StyledText style={styles.id}>
          {STRINGS.POST_ID} {id}
        </StyledText>
        <StyledText style={styles.userId}>
          {STRINGS.USER_ID} {userId}
        </StyledText>
      </View>
      {selectedPost?.postId ? (
        <View style={styles.timingContainer}>
          <StyledText style={styles.timing}>
            {`${STRINGS.RENDRING_TIME_FOR_POST_ID} ${
              selectedPost?.postId
            } :    ${
              selectedPost?.detail?.endTime - selectedPost?.detail?.startTime
            } ms`}
          </StyledText>
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => onButtonPress(id, details)}>
          <StyledText style={styles.buttonText}>{STRINGS.VIEW_POST}</StyledText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    ...SharedStyles.shadow,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  body: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.BLACK,
  },
  id: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  userId: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.WHITE,
  },
  timingContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timing: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});

export default memo(HomePostCard);
