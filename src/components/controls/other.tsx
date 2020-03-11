import React from "react"
import { View, StyleSheet, Modal, Alert } from "react-native"
import Constants from 'expo-constants';

export const StiView = props => <View style={style.view}>{props.children}</View>

export interface IModal {
  show: boolean,
  children: JSX.Element
}

export const StiModal = (props: IModal) => {

  return (<Modal
    animationType="slide"
    transparent={true}
    visible={props.show}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
    <View style={style.modal}>
      {props.children}
    </View>
  </Modal>
  )
}

const style = StyleSheet.create({
  modal: {
    flex: 1
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
  }
})