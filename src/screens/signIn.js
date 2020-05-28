import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {inject} from 'mobx-react';

var ls = require('react-native-local-storage');

const validations = Yup.object().shape({
  username: Yup.string().required('Alan boş bırakılamaz.'),
  password: Yup.string().required('Alan boş bırakılamaz.'),
});

@inject('AuthStore')
class signIn extends Component {
  _handleSubmit = async ({username, password}, bag) => {
    try {
      const {data} = await axios.post(
        'https://secure-forest-87056.herokuapp.com/api/users/login',
        {username, password},
      );
      if (!data.status) {
        alert('Kullanıcı Bulunamadı');
        return false;
      }
      
      ls.save('user', data).then(() => {
        Actions.push('home');
    })
    } catch (e) {
      bag.setSubmitting(false);
      bag.setErrors(e);
    }
  };
  render() {
    return (
      <View>
        <View>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={this._handleSubmit}
            validationSchema={validations}>
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting,
            }) => (
              <View>
                <Input
                  ref={ref => (this.usernameRef = ref)}
                  onSubmitEditing={() => this.passwordRef.focus()}
                  leftIcon={<Icon name="user" size={20} color="black" />}
                  onChangeText={handleChange('username')}
                  value={values.username}
                  placeholder="User Name"
                  returnKeyType={'next'}
                  onBlur={() => setFieldTouched('username')}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  errorMessage={
                    errors.username &&
                    touched.username && <Text>{errors.username}</Text>
                  }
                />
                <Input
                  ref={ref => (this.passwordRef = ref)}
                  leftIcon={<Icon name="lock" size={20} color="black" />}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="Password"
                  returnKeyType={'go'}
                  onBlur={() => setFieldTouched('password')}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  secureTextEntry={true}
                  errorMessage={
                    errors.password &&
                    touched.password && <Text>{errors.password}</Text>
                  }
                />
                <Button
                  title="LOGIN"
                  buttonStyle={{marginHorizontal: 10}}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.singUpTextView}>
          <TouchableOpacity onPress={() => Actions.push('signUp')}>
            <Text style={styles.signUpText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default signIn;

const styles = StyleSheet.create({
  singUpTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  signUpText: {
    color: '#0A73BB',
    fontWeight: 'bold',
  },
});
