import React from 'react'
import { ImageBackground, TouchableOpacity, Text, StyleSheet} from 'react-native'


export const Section = ({ state, id, img, text, button }) => {
 console.log(img, "heleo");

    return(
      <ImageBackground
            // style={state[0] == false ? styles.section : styles.section_active}
              style={state[id] == 0 ? styles.section : styles.section_active}
        resizeMode="cover" 
            source={img}
      >
      <TouchableOpacity id={id} onPress={()=> button(id)} style={styles.section}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
      </ImageBackground>
)
}


const styles = StyleSheet.create({
 
    section: {
     
        height:140,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
         
  },
    section_active: {
        backgroundColor: "black",
      height:350,
      marginVertical:3,
     
    },
    text: {
      color: "white",
      fontSize: 40,
    },
    worship: {
        flex: 1,
        backgroundColor: "black",
    }
})


