import React, { useState, useContext } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../../globalStyles'
import SafareaBar from '../../components/SafareaBar'
import { firebase } from '../../firebase/config'
import Spinner from 'react-native-loading-spinner-overlay'
import { useNavigation } from '@react-navigation/native'
import { colors } from 'theme'
import { ColorSchemeContext } from '../../context/ColorSchemeContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [focus, setFocus] = useState(false)
  const navigation = useNavigation()
  const { scheme } = useContext(ColorSchemeContext)

  const image = require('../../../assets/images/login.png')

  const onFooterLinkPress = () => {
    navigation.navigate('Registration')
  }

  const onLoginPress = () => {
    setSpinner(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              setSpinner(false)
              alert('User does not exist anymore.')
              return
            }
          })
          .catch((error) => {
            setSpinner(false)
            alert(error)
          })
      })
      .catch((error) => {
        setSpinner(false)
        alert(error)
      })
  }

  return (
    <ImageBackground
      source={image}
      imageStyle={{ resizeMode: 'cover' }}
      style={styles1.view}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <KeyboardAwareScrollView
        style={styles.main}
        keyboardShouldPersistTaps="always"
      >
        <View style={focus ? styles1.view2 : styles1.view3}>
          <TextInput
            style={[styles.input2]}
            placeholder="E-mail"
            placeholderTextColor="#FFFFFF"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            keyboardType={'email-address'}
            onFocus={() => setFocus(true)}
          />
          <TextInput
            style={[styles.input2]}
            placeholderTextColor="#FFFFFF"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            onFocus={() => setFocus(true)}
          />
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: 'white', color: 'black' },
            ]}
            onPress={() => onLoginPress()}
          >
            <Text style={styles.buttonText2}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text
              style={[
                styles.footerText,
                {
                  color: scheme === 'dark' ? colors.white : colors.primaryText,
                },
              ]}
            >
              Don't have an account?{' '}
              <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Spinner
        visible={spinner}
        textStyle={{ color: '#fff' }}
        overlayColor="rgba(0,0,0,0.5)"
      />
    </ImageBackground>
  )
}

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window')
const styles1 = StyleSheet.create({
  view: {
    flex: 1,
    height: screenHeight,
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    height: screenHeight,
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    height: screenHeight,
    marginVertical: 200,
  },
  imageBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: screenHeight,
    width: screenWidth,
  },
})
