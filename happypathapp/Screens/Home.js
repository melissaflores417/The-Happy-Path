import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { Section, SectionContent} from 'react-native-rapi-ui';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';





function Home() {
    return (
        /* Logo */
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 350}}>
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

            <View style={{ flexDirection: "row", justifyContent: 'center',}}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2c29b2',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Manage {'\n'} Anxiety</Text>
        </Section>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2c29b2',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Positive {'\n'}Self-Talk</Text>
        </Section>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2c29b2',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Learn more {'\n'} about {'\n'}mental health</Text>
        </Section>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2c29b2',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Manage{'\n'}Stress</Text>
        </Section>
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
      backgroundColor:'#DFECFF',
      height: 100,
      width: 130,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      fontFamily: 'Avenir',
      fontSize: 14,
      fontWeight: 'bold',
      paddingLeft: 5,
      paddingTop: 15
    }
  });

export default Home
