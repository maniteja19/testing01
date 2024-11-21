import {Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const {height} = Dimensions.get('window');
const Login = () => {
  const [secureEntry, setSecureEntry] = useState(true);
  const [errorMessage, seterrorMessage] = useState('');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps={'always'}>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Create an Account</Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              neque, sit repellendus minima illum quia quae! Cupiditate magnam
              quam cum, nam doloremque, placeat commodi ut, aperiam ullam
              voluptatem ipsum qui.
            </Text>
            <View style={styles.signinButtonContainer}>
              <TouchableOpacity style={styles.signinButton}>
                <Text style={styles.signinButtonText}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.footerHeading}>Sign in,</Text>
            <View style={styles.loginContainer}>
              <View style={[styles.inputContainer, styles.inputElevation]}>
                <FontAwesome
                  name="user-o"
                  color={'#428475'}
                  style={styles.Icon}
                />
                <TextInput
                  placeholder="Enter email address"
                  style={styles.textInput}
                />
              </View>
              <View style={[styles.inputContainer, styles.inputElevation]}>
                <FontAwesome
                  name="lock"
                  color={'#428475'}
                  style={styles.Icon}
                />
                <TextInput
                  placeholder="Enter password"
                  style={styles.textInput}
                  secureTextEntry={secureEntry}
                  // onChange={e => setPassword(e.nativeEvent.text)}
                  // value={password}
                />
                <TouchableOpacity
                  onPress={() => {
                    setSecureEntry(prev => !prev);
                  }}>
                  {secureEntry ? (
                    <Feather
                      name="eye"
                      size={20}
                      color={'grey'}
                      style={styles.featherIcon}
                    />
                  ) : (
                    <Feather
                      name="eye-off"
                      size={20}
                      color={'grey'}
                      style={styles.featherIcon}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              ) : null}
            </View>
            <View>
              <TouchableOpacity
                style={[styles.button, styles.buttonElevation]}
                onPress={() => handleLogin()}>
                <View>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightblue',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  headerContainer: {
    backgroundColor: '#47ccc8',
    padding: 20,
    height: height * 0.32,
    marginTop: -8,
    paddingVertical: 40,
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  signinButtonText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Arial',
  },
  signinButtonContainer: {
    alignItems: 'center',
  },
  signinButton: {
    borderWidth: 1.3,
    borderColor: 'white',
    paddingBottom: 10,
    paddingHorizontal: 80,
    borderRadius: 40,
    marginTop: 15,
  },
  footerHeading: {
    fontFamily: 'Arial',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    color: '#47ccc8',
    fontWeight: '800',
  },
  loginContainer: {
    marginVertical: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 0,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    marginBottom: 20,
    marginHorizontal: 16,
    paddingVertical: 6,
  },
  inputElevation: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  inputBox: {
    paddingVertical: 20,
  },
  Icon: {
    fontSize: 22,
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
    marginRight: 20,
  },
  featherIcon: {
    paddingRight: 13,
  },
  button: {
    backgroundColor: '#47ccc8',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -15,
    marginHorizontal: 26,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
  buttonElevation: {
    backgroundColor: '#47ccc8',
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: '#8c61c2',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
