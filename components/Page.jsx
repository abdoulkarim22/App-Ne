import { View, StyleSheet,Text,Image } from 'react-native'
import React from 'react'

export default function Page() {
  return (
    <View style= {styles.container} >
       <View style={styles.containerOne}>
         <Image 
         style={styles.img} 
         source={require("../components/Images/TheMaps.png")}

         />
       </View>
       <View style = {styles.containerTwo}>
         <Text style={{textAlign:"center"}}>zzzzzzzzzzzzz</Text>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    containerOne:{
        borderWidth:5,
        borderColor:"red",
        width:450,
        height:300
    }, 
     containerTwo:{
        borderWidth:5,
        borderColor:"blue",
        width:450,
        height:600,
        backgroundColor:"blue", 
    },
    img:{
        width:450,
        height:300
     }

})