import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

export function GiveScreen({ navigationProps }) {
  const [hasLoaded, setHasLoaded] = React.useState(false)

  return (
    <WebView
      style={styles.container}
      source={{
        uri: 'https://tithe.ly/give_new/www/#/tithely/give-one-time/463148',
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
})
