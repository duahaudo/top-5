import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native"
import {StiTxt} from "./input"

export interface IBtn {
  onPress: () => void,
  title: string,
  style?: {}
}

export const StiBtn = (props: IBtn) => {
  return (
    <TouchableOpacity style={{...style.button, ...props.style}} onPress={() => props.onPress()}>
      <StiTxt style={style.buttonTxt}> { props.title } </StiTxt>
    </TouchableOpacity>
  )
}

export const LnkBtn = (props: IBtn) => {
  const styles = {...style.lnk, ...props.style}
  return (
    <TouchableOpacity style={styles} onPress={() => props.onPress()}>
      <StiTxt style={props.style}> { props.title } </StiTxt>
    </TouchableOpacity>
  )
}

export const iconBtnStyle = {
  margin: 20,
  backgroundColor: "royalblue",
  padding: 10,
  width: 60,
  height: 60,
  alignSelf: "center",
  borderRadius: 32,
  justifyContent: 'center',
  alignItems: "center"
}

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'royalblue',
    paddingVertical: 15,
    borderRadius: 5
  },
  buttonTxt: {
    color: "#fff",
    fontSize: 16
  },
  lnk:{
    
  }
})