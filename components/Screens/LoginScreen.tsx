import {
    Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const {height} = Dimensions.get('window');
const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const handleLogin = ()=>{
        setErrorMessage('');
        if (!email || !password ) {
          return setErrorMessage('Please enter email and password.');
        }
        else if(!email){
            return setErrorMessage('Please enter email.');
        }
        else if(!password){
            return setErrorMessage('Please enter password.');
        }
    };
  return (
    <ScrollView
    contentContainerStyle={styles.mainContainer}
      keyboardShouldPersistTaps={'always'}>
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View>{errorMessage ? <Text>{errorMessage}</Text> : null}</View>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerText}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signInText}> SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#47ccc8',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
    width: '85%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: 'absolute',
    top: 190,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#47ccc8',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 4,
    width: '100%',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#47ccc8',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#47ccc8',
    marginTop: 10,
    fontSize: 14,
  },
  footerText: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 30,
  },
  signInText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#fff',
    fontSize:16,
  },
  accountText:{
    color:'#fff',
    fontSize:16,
  }
});
