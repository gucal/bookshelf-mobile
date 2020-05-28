import {observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class AuthStore {
  @observable token = null;

  @action async saveToken(token) {
    console.log(token);
    try {
      await AsyncStorage.setItem('token', token);
      const data = await AsyncStorage.getItem('token');
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
}
export default AuthStore;
