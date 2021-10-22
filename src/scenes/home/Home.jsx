import React, { useState, useRef } from "react";
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar 
} from 'react-native'

import { Section } from '../../components/Section';

export default function Home() {
  const [section, setSection] = useState(Array(6).fill(false));
 
  
    const handlePress = (e) => {
      console.log(e);
      const arr = Array(6).fill(false)
      arr[e] = true
      setSection(arr)
      console.log(arr);
      
  };
  
  return (
  <View style={style.container}>
  <ScrollView style={style.scrollView}>

      
    <Section state={section} id={0} key={0} img={require('../../../assets/images/section/worship.jpg')} text={'About Us'} button={handlePress}/>
    <Section state={section} id={1} key={1} img={require('../../../assets/images/section/connect.jpg')} text={'Connect'} button={handlePress}/>
    <Section state={section} id={2} key={2} img={require('../../../assets/images/section/calender.jpg')} text={'Calender'} button={handlePress}/>
    <Section state={section} id={3} key={3} img={require('../../../assets/images/section/media.jpg')} text={'Media'} button={handlePress}/>
    <Section state={section} id={4} key={4} img={require('../../../assets/images/aboutUs.jpg')} text={'Give'} button={handlePress}/>
    <Section state={section} id={5} key={5} img={require('../../../assets/images/aboutUs.jpg')} text={'Watch Online'} button={handlePress}/>
    <Section state={section} id={6} key={6} img={require('../../../assets/images/aboutUs.jpg')} text={'Update'} button={handlePress}/>
    <Section state={section} id={7} key={7} img={require('../../../assets/images/aboutUs.jpg')} text={'New Believer'} button={handlePress}/>
  
    </ScrollView>
    </View>
 
)}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
   scrollView: {
  
  },
  panels: {
    flex: 1,
    backgroundColor: "silver",
    marginVertical: 0,
   
        shadowOffset: { width: 0, height: 2 },
        color: "white",
        textAlign: "center",
        alignItems: "center",
        fontSize: 20,
        justifyContent: "center",
        flexDirection: "column"
  },
  box: {
    flex: 2,
    backgroundColor: "black",
  },
   section: {
     
        flex: 1,
    marginVertical:10,
         
  },
    text: {
      color: "black",
      fontSize: 40,
    },
})
