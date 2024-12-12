// write by "Amrik"
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllUserData} from './userSlice';
import {RouteConstants} from '../../routes/RouteConstants';

const AllUsersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const user = useSelector(state => state.user.user);
  const status = useSelector(state => state.user.status);

  useEffect(() => {
    dispatch(fetchAllUserData());
  }, [dispatch]);

  const nextScreenPosts = item => {
    return () => {
      //let item = mItem.item;
      navigation.navigate(RouteConstants.UserPostsScreen, {
        userId: item.id,
      });
    };
  };

  const nextScreenUser = item => {
    return () => {
      console.log('item...', item);
      navigation.navigate(RouteConstants.UserScreen, {
        userId: item?.id,
      });
    };
  };

  if (status === 'loading') {
    return <ActivityIndicator size="large" />;
  }

  if (status === 'failed') {
    return <Text style={styles.error}>Failed to load users</Text>;
  }

  console.log('Render AllUsersScreen ...', user);
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <>
            <View style={{marginTop: 10}}>
              <Text>name: {item?.name}</Text>
              <Text>email: {item?.email}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: 5,
              }}>
              <TouchableOpacity
                style={styles.item}
                onPress={nextScreenUser(item)}>
                <Text>{'Details'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                onPress={nextScreenPosts(item)}>
                <Text>{'Post'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: 'grey'}}></View>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, marginTop: 10},
  item: {padding: 16},
  error: {color: 'red'},
});

export default AllUsersScreen;
