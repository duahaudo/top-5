import React from "react"
import {View, Text} from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import {IStoreState} from "../../duck/type"
import style from "./style"
import {LnkBtn} from "../controls/button"

export default () => {
  const module: string = useSelector(({reducer}: IStoreState) => reducer.module)
  return (
    <View style={style.header}>
      <View>
        <Text style={style.text}> {module} </Text>
      </View>
    </View>
  )
}