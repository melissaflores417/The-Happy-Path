import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


function Explore() {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 473, backgroundColor: '#E0D3E8'}}>
             <Image source={require('../Screens/happypath.png')} style={styles.logo}/>
        <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir'}}>Encouraging Notes</Text>
       <Text style = {{ textAlign: 'center', fontSize:'16', fontWeight: 'regular', color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>View some encouraging words {'\n'} to lift you up or create your own!</Text>
   </View>
    )
}
const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
      marginLeft: 5,
      marginBottom: 20,
      backgroundColor: 0
    },
  });


export default Explore
