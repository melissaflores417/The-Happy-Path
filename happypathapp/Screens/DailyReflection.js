import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

function DailyReflection() {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 700, backgroundColor:'#FFFBE4'}}>
               <Image source={require('../Screens/happypath.png')} style={styles.logo}/>
            <Text style= {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir', marginTop: 30}}>Daily Reflection</Text>
        
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
      marginLeft: 5,
      marginTop: 340
    }
  });


export default DailyReflection
