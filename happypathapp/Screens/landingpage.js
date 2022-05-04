import React from 'react'
import { View, Text, Button, Image, StyleSheet} from 'react-native'


const LandingPage = ({ _id }) => {
    return (
        
        <View style={{alignItems:'center', justifyContent:'center', marginBottom: 100, backgroundColor: '#DFECFF'}}>
                <Image source={require('../Screens/happypath.png')} style={styles.logo}/>
        <Text style={{color: '#2C29B2', fontWeight: 'bold'}}>Get on the path to better self care and mental health</Text>
    
      <Button
        title="Get Started"
        onPress={() =>
          this.props.navigation.navigate('Home')}/>
        </View>
    );
  };
  const styles = StyleSheet.create({
    logo: {
      width: 200,
      height: 200,
      marginLeft: 5,
      marginBottom: 20 
    },
  });

export default LandingPage
