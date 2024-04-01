import { View,Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style = {styles.container}>
      <Image
        source={require("../components/Images/TheMaps.png")}
        style={styles.img}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop: 50,

    },
})