import React, { useEffect, useRef, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Button,
  ActivityIndicator,
} from 'react-native'
import { WebView } from 'react-native-webview'
import { useIsFocused } from '@react-navigation/native'

export function LiveScreen() {
  const webViewRef = useRef()
  const [state, setState] = useState(0)
  const [visibility, setVisibility] = useState(true)
  const isFocused = useIsFocused()

  if (!isFocused) {
    return <View></View>
  }

  const hideSpinner = () => {
    setVisibility(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView
        onLoad={() => hideSpinner()}
        key={state}
        javaScriptEnabled={true}
        scrollEnabled={false}
        allowsFullscreenVideo={true}
        startInLoadingState={true}
        source={{
          uri: 'https://www.youtube.com/channel/UCQsrNIvA4BrdctIUpmu4lGQ',
        }}
        style={styles.video}
      />
      {visibility && (
        <ActivityIndicator
          style={{ position: 'absolute', top: 20, left: 50 }}
          size="large"
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  video: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
})
