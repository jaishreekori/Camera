import React, { Component } from 'react'
import { Image, View, StyleSheet, Platform } from 'react-native'

export default class Img extends Component {
   render() {
      return (
         <View style={styles.MainContainer}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKRrwhDb4yMAKG_qwk8-rCw2vlEXANK1TSq26U268ySF-G1v3' }}
               style={{ width: 200, height: 200, borderRadius: 200 / 2 }} 
               />
         </View>
      );
   }
}
const styles = StyleSheet.create(
   {
      MainContainer:
      {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         margin: 5,
         paddingTop: (Platform.OS === 'ios') ? 20 : 0
      }

   });



// const Img = () => (
//    <Image source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKRrwhDb4yMAKG_qwk8-rCw2vlEXANK1TSq26U268ySF-G1v3'}}
//    style = {{ width: 150, height: 150,  borderRadius: 150/2 }}
//    />
//    )

   //export default Img