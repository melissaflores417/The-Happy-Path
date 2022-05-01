import React from 'react'
import { View, Text } from 'react-native'
import Header from './Header'


function Home() {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 400}}>
            <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir'}}>Welcome Home!</Text>
            <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir'}}>This is your safe space.</Text>
            
        </View>
    )
}

export default Home
