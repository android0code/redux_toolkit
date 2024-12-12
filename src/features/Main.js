// write by "Amrik"
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthStackScreen from '../routes/AuthNav';
import MainStackScreen from '../routes/MainNav';
import {useSelector} from 'react-redux';

const Main = () => {
  const user = useSelector(state => state.user.user);
  console.log('main...', user);
  return (
    <NavigationContainer>
      {user != null ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default Main;
