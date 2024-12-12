// write by "Amrik"
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserPosts} from './userSlice';

const UserPostsScreen = ({route}) => {
  const {userId} = route.params;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const posts = useSelector(state => state.user.posts);
  const status = useSelector(state => state.user.status);

  console.log('userId...', userId);
  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

  if (status === 'loading') {
    return <ActivityIndicator size="large" />;
  }

  if (status === 'failed') {
    return <Text style={styles.error}>Failed to load posts</Text>;
  }
  console.log('Render UserPostsScreen ...', user);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  item: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  title: {fontSize: 16, fontWeight: 'bold'},
  error: {color: 'red'},
});

export default UserPostsScreen;
