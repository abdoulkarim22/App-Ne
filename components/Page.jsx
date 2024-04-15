import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

export default function Page() {
  return (
    <View style={styles.container} >
      <View style={styles.containerOne}>
        <Image
          style={styles.img}
          source={require("../components/Images/TheMaps.png")}
        />
      </View>
      <View style={styles.containerTwo}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ backgroundColor: "#FFC300", width: 100, height: 100, borderRadius: 100, }}></View>
        </View>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>Amanda</Text>
        <View style={{ padding: 40, }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, }}>lorem</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente est maxime placeat, necessitatibus nesciunt tempora accusantium atque sit harum error consequatur laborum suscipit</Text>
          <View style={styles.hr} />
          <Text style={{ marginVertical: 20 }}><Icon name="location-arrow" size={20} color="#900" />   157 lorem (lorem)</Text>
          <Text style={{ fontWeight: "bold" }}><Icon name="thumbs-o-up" size={20} color="#FFC300" />   919 lorem (lorem)</Text>
        </View>
        <View style={{padding:40}}>
        <View>
            <Text style={{fontSize:13,fontWeight:"bold"}}>Trip fare</Text>
            <View style={styles.hrFare} />
         </View>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Lorem</Text><Text style={{color:"blue"}}>$12.30</Text></View>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Lorem</Text><Text style={{color:"blue"}}>$54 km</Text></View>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text>Lorem</Text><Text style={{color:"blue"}}>0.740 km</Text></View>
        </View>
        <View style={styles.theContainerofButton}>
          <TouchableOpacity style={styles.Touchable}>
            <Text style={{textAlign:"center",fontSize:15}}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Accept}>
            <Text style={{textAlign:"center",fontSize:15}}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  containerOne: {
    width: 450,
    height: 50,
  },
  containerTwo: {
    width: 450,
    height: 700,
  },
  img: {
    width: 450,
    height: 190
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 20,
    width: 30,
    borderColor: "#fed850"
  },
  hrFare:{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 50,
    marginVertical:5,
    borderColor: "#fed850"
  },
  theContainerofButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
    gap:50,
  },
  Touchable:{
    backgroundColor:"white",
    borderWidth:1,
    padding:10,
    width:100,
  },
  Accept:{
    backgroundColor:"white",
    padding:10,
    width:100,
    backgroundColor:"#FFC300"
  }
})