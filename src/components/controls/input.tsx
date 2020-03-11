import React from "react"
import {View, TextInput, StyleSheet, Text} from "react-native"

export const StiTxt = (props) => <Text style={{ ...style.text, ...props.style}}>{props.children}</Text>

export const StiInput = ({title, value, onChangeText, ...options}) => (
  <View style={style.inputWrapper}>
    {!!title && <StiTxt>{title}</StiTxt>}
    <TextInput 
      {...options}
      style={{...style.input, ...options.style}}
      onChangeText={text => onChangeText(text)}
      value={value}/>
  </View>
)

const style = StyleSheet.create({
  input: { 
    minHeight: 40, 
    borderColor: '#ddd', 
    borderWidth: 1,
    borderRadius: 3,
    color: "#696969",
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  text: {
    color: "#696969"
  },
  inputWrapper: {
    marginVertical: 10
  }
})