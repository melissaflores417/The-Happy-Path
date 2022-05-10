import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Section, SectionContent, Button } from 'react-native-rapi-ui';

function Tips() {
    return (
        /* Logo */
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 0, backgroundColor: '#E0D3E8'}}>
             <Image source={require('../Screens/happypath.png')} style={styles.logo}/>

        {/* Title Blurb */}
        <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir'}}>Improve your daily routine</Text>
        <Text style = {{textAlign: 'center', fontSize:'16', fontWeight: 'regular', color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>Here is a selection of activites {'\n'} and tips you can choose from.</Text>
        <Text style ={{marginTop: 10, fontWeight: 'bold', fontFamily: 'Avenir'}}>What would you like to focus on today?</Text>

        {/* Content */}
        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'left'}}>Go out for a walk</Text>
            <Text style = {{ textAlign: 'left', fontSize:'14', fontWeight: 'regular',
                            color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>
                              Take a step outside and feel the fresh air. {'\n'}Explore your surroundings.</Text>
        </Section>
        </View>
        
        <View style={{ flexDirection: "row", justifyContent: 'center'}}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'left'}}>Take a breather</Text>
            <Text style = {{ textAlign: 'left', fontSize:'14', fontWeight: 'regular',
                            color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>
                              This exercise will take you through breathing exercises and relax your muscles.</Text>
        </Section>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'center'}}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'left'}}>Self-care short story</Text>
            <Text style = {{ textAlign: 'left', fontSize:'14', fontWeight: 'regular',
                            color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>
                              Read this short interactive story that engages you into the charcter's journey.</Text>
        </Section>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'center'}}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'left'}}>A collection of podcasts</Text>
            <Text style = {{ textAlign: 'left', fontSize:'14', fontWeight: 'regular',
                            color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>
                              This article provides a set of useful podcasts that share helpful tips and stories about mental health.</Text>
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
      marginBottom: 20,
      backgroundColor: 0
    },
    categories: {
      backgroundColor: '#FFFBE4',
      height: 100,
      width: 350,
      marginTop: 10,
      marginBottom: 10,
      fontFamily: 'Avenir',
      fontSize: 14,
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingTop: 15
    }
  });

export default Tips
