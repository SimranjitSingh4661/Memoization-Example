import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {ERROR_MESSAGES, STRINGS} from '../../constants/string';
import {
  ScreenContainer,
  Header,
  ErrorToast,
  EmptyComponent,
  ScreenLoading,
} from '../../components/atoms';
import {getAllPosts, getPostById} from '../../api/getApis';
import {HomePostCard} from '../../components/molecules';
import {SCREEN_PADDING} from '../../constants';

const WelcomeScreen = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [postDetail, setPostDetail] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllPosts();
        setData(res);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log('err', err);
        setError(err || ERROR_MESSAGES.SOMETHING_WENT_WRONG);
      }
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await getPostById(selectedPost?.postId);
        setPostDetail(res);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log('Error:', err);
      }
    })();
  }, [selectedPost?.postId]);

  const onButtonPress = useCallback((postId, detail) => {
    setSelectedPost({postId, detail});
  }, []);

  const onBackPress = () => {
    setSelectedPost({});
  };

  if (loading) {
    return (
      <ScreenLoading
        hideBackBtn={!!selectedPost?.postId}
        title={
          !!selectedPost?.postId ? STRINGS.POST_DETAIL : STRINGS.USER_POSTS
        }
      />
    );
  }

  return (
    <ScreenContainer>
      <Header
        onBackPress={onBackPress}
        hideBackBtn={!!selectedPost?.postId}
        title={
          !!selectedPost?.postId ? STRINGS.POST_DETAIL : STRINGS.USER_POSTS
        }
      />
      {selectedPost?.postId ? (
        <View style={styles.container}>
          <HomePostCard
            id={postDetail?.id}
            body={postDetail?.body}
            title={postDetail?.title}
            userId={postDetail.userId}
            selectedPost={selectedPost}
          />
        </View>
      ) : (
        <FlatList
          data={data}
          ListEmptyComponent={<EmptyComponent />}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item, index}) => {
            return (
              <HomePostCard
                id={item?.id}
                body={item?.body}
                title={item?.title}
                userId={item.userId}
                key={item?.id + index}
                onButtonPress={onButtonPress}
              />
            );
          }}
        />
      )}
      {error && <ErrorToast />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: SCREEN_PADDING,
    paddingHorizontal: SCREEN_PADDING,
  },
});

export default WelcomeScreen;
