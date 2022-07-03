import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from "../utils/sizes";

export const Timing=({onChangeTime})=>{
return(
  <>
  <View style={styles.timingButtonWrapper}>
    <RoundedButton title={"10"} size={75} onPress={()=>{onChangeTime(10)}} />
  </View>

  <View style={styles.timingButtonWrapper}>
    <RoundedButton title={"25"} size={75} onPress={()=>{onChangeTime(25)}} />
  </View>

  <View style={styles.timingButtonWrapper}>
    <RoundedButton title={"50"} size={75} onPress={()=>{onChangeTime(50)}} />
  </View>
  </>
)
}
const styles= StyleSheet.create({
  timingButtonWrapper:{
    flex:1,
    alignItems:"center",
  }
})