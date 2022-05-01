import React from 'react'
import { View, Text } from 'react-native'


function Explore() {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 400, backgroundColor: '#E0D3E8'}}>
        <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir'}}>Encouraging Notes</Text>
       <Text style = {{ textAlign: 'center', fontSize:'16', fontWeight: 'regular', color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>View some encouraging words {'\n'} to lift you up or create your own!</Text>
   </View>
    )
}

export default Explore
