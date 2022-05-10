import React from 'react'
import { View, Text, Image, StyleSheet, TextInput} from 'react-native'

function DailyReflection() {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1,  backgroundColor:'#FFFBE4'}}>
               <Image source={require('../Screens/happypath.png')} style={styles.logo}/>
            <Text style= {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily: 'Avenir', marginTop: 30}}>Daily Reflection</Text>
            <Text style= {{fontSize:'16', fontWeight: 'bold', color:'#252525', fontFamily: 'Avenir', marginTop: 30, marginRight: 200}}>Today I'm feeling..</Text>
            <Text style= {{fontSize:'16', fontWeight: 'bold', color:'#252525', fontFamily: 'Avenir', marginTop: 30, marginRight: 225}}>Thought Dump</Text>
            <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      placeholder="Type out your thoughts"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
  </View>
            <Text style= {{fontSize:'16', fontWeight: 'bold', color:'#252525', fontFamily: 'Avenir', marginTop: 20, marginRight: 140}}>What are you thankful for?</Text>
            <View style={styles.textAreaContainer1} >
    <TextInput
      style={styles.textArea}
      placeholder="Type out your thoughts"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
  </View>
            <Text style= {{fontSize:'16', fontWeight: 'bold', color:'#252525', fontFamily: 'Avenir', marginTop: 20, marginRight: 85}}>What are you looking forward to?</Text>
            <View style={styles.textAreaContainer2} >
    <TextInput
      style={styles.textArea}
      placeholder="Type out your thoughts"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
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
    }, 
     textAreaContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        width: 300,
        borderRadius: 5,
        marginRight: 35, 
        marginTop: 10,
        height: 110
      },
      textAreaContainer1: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        width: 300,
        borderRadius: 5,
        marginRight: 35, 
        marginTop: 10,
        height: 70
      },
      textAreaContainer2: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        width: 300,
        borderRadius: 5,
        marginRight: 35, 
        marginTop: 10,
        height: 70
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start"
      }
  });


export default DailyReflection
