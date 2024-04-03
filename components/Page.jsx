import { View, StyleSheet,Text,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
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
         <View style={{justifyContent: "center",alignItems:"center"}}>
           <View style={{backgroundColor: "#FFC300",width:100,height:100,borderRadius:100,}}></View>
         </View>
         <Text style={{fontSize:20,textAlign:"center",fontWeight:"bold"}}>Amanda</Text>
         <View style={{padding:40,}}>
           <Text style={{fontWeight:"bold",fontSize:18,}}>lorem</Text>
           <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente est maxime placeat, necessitatibus nesciunt tempora accusantium atque sit harum error consequatur laborum suscipit</Text>
           <View style={styles.hr} />
          <Text style={{marginVertical:20}}><Icon name="heart" size={30} color="#900" /> 157 lorem (lorem)</Text>
          <Text style={{fontWeight:"bold"}}><Icon name="heart" size={30} color="#900" /> 919 lorem (lorem)</Text>
         </View>
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
        width:450,
        height:150,
        borderWidth:2,
        borderBottomColor:"blue",
    }, 
     containerTwo:{
        width:450,
        height:620,
        borderWidth:2
    },
    img:{
        width:450,
        height:210
     },
     hr: {
      borderBottomColor: 'black', 
      borderBottomWidth: 1, 
      marginVertical: 20, 
      width:30,
      borderColor:"#fed850"
    },

})