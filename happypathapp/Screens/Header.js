import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Header(){
    return(
        <View style={styles.Header}>
            <View>
                <Text style={styles.headerText}>HEADERRR</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        width:'100%',
        marginTop: '30pt',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});