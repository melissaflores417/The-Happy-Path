import React from 'react'
import { View, Text, Image, StyleSheet, Section, SectionContent, Picker} from 'react-native'

function DailyReflection() {
  
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1, marginBottom: 527, backgroundColor: '#fffbe4'}}>
             <Image source={require('../Screens/happypath.png')} style={styles.logo}/>
        <Text style = {{fontSize:'20', fontWeight: 'bold', color:'#2c29b2', fontFamily:'Avenir'}}>Daily Reflection</Text>
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
            <SectionContent>
                
                    <Text style={{ marginBottom: 10 }}>Picker</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        placeholder="Choose your role"
                        onValueChange={(val) => setPickerValue(val)}
                    />
               
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
