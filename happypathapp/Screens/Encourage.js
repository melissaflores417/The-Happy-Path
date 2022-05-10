import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Section } from 'react-native-rapi-ui';

function Encourage() {

    return (
        /* Logo */
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 0, backgroundColor: '#E0D3E8'}}>
             <Image source={require('../Screens/happypath.png')} style={styles.logo}/>
             
        {/* Title */}
        <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir'}}>Encouraging Notes</Text>
        <Text style = {{textAlign: 'center', fontSize:'16', fontWeight: 'regular', color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>View some encouraging words {'\n'} to lift you up or create your own!</Text>
        <Text style = {{textAlign: 'left', fontSize:'16', fontWeight: 'bold', color:'#252525', fontFamily: 'Avenir', marginTop: 40}}>Select categories</Text>
        
        {/* Content */}
        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Open when {'\n'}you are feeling sad..</Text>
        </Section>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Open when {'\n'}you are feeling lost..</Text>
        </Section>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Open when {'\n'}you need motivation!</Text>
        </Section>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Open when {'\n'}you want to celebrate!</Text>
        </Section>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'center', paddingTop: 10}}>Open when {'\n'}you want to give up..</Text>
        </Section>
        <Section style={styles.categories}>
            <Text style = {{fontSize:'16', fontWeight: 'bold', color:'#2d2d2d',
                            fontFamily: 'Avenir', textAlign: 'center'}}>Open when {'\n'}you are feeling good about yourself..</Text>
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
      width: 175,
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

export default Encourage
