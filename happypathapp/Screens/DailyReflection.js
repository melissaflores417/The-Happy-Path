import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Section, SectionContent, Picker} from 'react-native'

function DailyReflection() {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 527, backgroundColor: '#fffbe4'}}>
             <Image source={require('../Screens/happypath.png')} style={styles.logo}/>
        <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily:'Avenir'}}>Daily Reflection</Text>
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
            <SectionContent>
                
                    <Text style={{ marginBottom: 10 }}>Picker</Text>
                    <Picker>
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        <Text style = {{ textAlign: 'center', fontSize:'16', fontWeight: 'regular', color:'#252525', fontFamily: 'Avenir', marginTop: 10}}>What's your favorite color?</Text>
                        <Picker.Item label="Blue" value="blue" />
                        <Picker.Item label="Red" value="red" />
                        <Picker.Item label="Green" value="green" />
                        <Picker.Item label="Purple" value="purple" />
                    </Picker>
               
            </SectionContent>
        </Section>
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

export default DailyReflection
