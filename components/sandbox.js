import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox(){
    return(
       <View style={styles.container}>
       <Text style={styles.boxOne}>One</Text>
       <Text style={styles.boxTwo}>One</Text>
       <Text style={styles.boxThree}>One</Text>
       <Text style={styles.boxFour}>One</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        paddingTop:40,
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingTop:40,

    },
    boxOne:{
        flex:1,
        backgroundColor:'red',
        padding:10,
    },
    boxTwo:{
        flex:2,
        backgroundColor:'gold',
        padding:20,
    },
    boxThree:{
        flex:1,
        backgroundColor:'blue',
        padding:30,
    },
    boxFour:{
        flex:3,
        backgroundColor:'coral',
        padding:40,
    }

})