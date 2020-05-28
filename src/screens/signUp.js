import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-community/async-storage';

const validations = Yup.object().shape({
  email: Yup.string()
    .required('Alan boş bırakılamaz.')
    .email('Geçerli bir e-posta adresi giriniz.'),
  username: Yup.string().required('Alan boş bırakılamaz.'),
  password: Yup.string()
    .required('Alan boş bırakılamaz.')
    .min(5, 'Şifre en az 5 karakter olmalıdır.'),
});
export default class signUp extends Component {
  _handleSubmit = async ({email, username, password}, bag) => {
    try {
      const {data} = await axios.post(
        'https://secure-forest-87056.herokuapp.com/api/users/register',
        {email, username, password},
      );
      bag.setSubmitting(false);

      if (data.hasOwnProperty('errors')) {
        bag.setErrors(data.errors);
        return false;
      }

      Actions.push('signIn');
    } catch (e) {
      console.log(e)
      bag.setSubmitting(false);
      bag.setErrors(e);
    }
  };
  render() {
    return (
      <Formik
        initialValues={{
          email: '',
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
              leftIcon={<Icon name="user" size={20} color="black" />}
              returnKeyType={'next'}
              onSubmitEditing={() => this.usernameRef.focus()}
              onChangeText={handleChange('email')}
              placeholder="E - mail"
              value={values.email}
              autoCapitalize={'none'}
              onBlur={() => setFieldTouched('email')}
              autoCorrect={false}
              returnKeyType={'next'}
              errorMessage={
                errors.email && touched.email && <Text>{errors.email}</Text>
              }
            />
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
              placeholder="password"
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
              title="SAVE"
              buttonStyle={{marginHorizontal: 10}}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({});
