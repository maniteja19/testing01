import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
    const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={styles.mainContainer}
      keyboardShouldPersistTaps={'always'}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Create an account</Text>
        <View style={styles.container}>
          <Text style={styles.header}>Signin</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="User name" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Phone Number" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Password" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerText}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInText}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

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
    top: 120,
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
    marginBottom: 12,
    paddingHorizontal: 4,
    width: '100%',
    borderBottomWidth: 0.5,
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
    fontSize: 16,
  },
  accountText: {
    color: '#fff',
    fontSize: 16,
  },
});
