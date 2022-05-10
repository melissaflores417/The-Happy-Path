import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { Section, SectionContent} from 'react-native-rapi-ui';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';





function Home() {
    return (
        /* Logo */
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 500}}>
             <Image source={require('../Screens/happypath.png')} style={styles.logo}/>

            <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir', marginTop: 30}}>Welcome Home!</Text>
            <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir', marginBottom: 10}}>This is your safe space.</Text>
            <Text style ={{marginTop: 10, fontWeight: 'bold', fontFamily: 'Avenir'}}>How did you feel waking up today?</Text>
      <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: 10, marginBottom: 10}}>
     
    <Button
      color="green"
      icon={
        <Icon
          name="smile"
          size={15}
          color="white"
          
        />
      }
    />
    <Button
      color="green"
      icon={
        <Icon
          name="meh"
          size={15}
          color="white"
          
        />
      }
      
    />
    <Button
      color="green"
      icon={
        <Icon
          name="frown"
          size={15}
          color="white"
          
        />
      }
      
    />


      </View>
            <Text style={styles.reminder}>Reminder! {'\n'} Today is a new day. Be mindful of {'\n'} how you spend your time.</Text>
            <Text style ={{marginTop: 10, fontWeight: 'bold', fontFamily: 'Avenir'}}>What would you like to focus on today?</Text>

            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
   
            <SectionContent style={styles.categories}>
                <Text>Manage Anxiety</Text>
            </SectionContent>
            <SectionContent style={styles.categories}>
                <Text>Manage Stress</Text>
            </SectionContent>
        </View>
        </View>
    )
}

/* Styling */
const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
      marginLeft: 5,
      marginTop: 340
    },
    reminder: {
      backgroundColor: '#FFFBE4',
      marginTop: 10,
      fontFamily: 'Avenir',
      fontSize: 14,
      padding: 20,
      fontWeight: 'bold',
      marginBottom: 10
    },
    categories: {
      backgroundColor: '#DFECFF',
      marginTop: 10,
      fontFamily: 'Avenir',
      fontSize: 14,
      padding: 20,
      fontWeight: 'bold', 
      marginLeft: 10,
      marginRight: 10
    }
  });

export default Home
