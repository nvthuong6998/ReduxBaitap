import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <TouchableOpacity
        style={{backgroundColor: 'red'}}
        onPress={() => navigation.navigate('Home')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
