import React from "react"
import { View } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { IStoreState } from "../../duck/type"
import style from "./style"
import { setModule, moduleName } from "../../duck/action"

import { StiIconFontAwesome5, StiIconEntypo } from '../controls/icon';


export default () => {
  const dispatch = useDispatch();
  const module: string = useSelector(({ reducer }: IStoreState) => reducer.module)

  return (
    <View style={style.footer}>
      <View>
        <StiIconFontAwesome5 name="home" size={30} color={module === moduleName.HOME ? "royalblue" : "black"}
          onPress={() => dispatch(setModule(moduleName.HOME))} />
      </View>
      <View>
        <StiIconFontAwesome5 name="sticky-note" size={30} color={module === moduleName.NOTE ? "royalblue" : "black"}
          onPress={() => dispatch(setModule(moduleName.NOTE))} />
      </View>
      <View>
        <StiIconFontAwesome5 name="camera-retro" size={30} color={module === moduleName.CAMERA ? "royalblue" : "black"}
          onPress={() => dispatch(setModule(moduleName.CAMERA))} />
      </View>
      <View>
        <StiIconEntypo name="chat" size={30} color={module === moduleName.CHAT ? "royalblue" : "black"}
          onPress={() => dispatch(setModule(moduleName.CHAT))} />
      </View>
      <View>
        <StiIconFontAwesome5 name="user-cog" size={30} color={module === moduleName.USER ? "royalblue" : "black"}
          onPress={() => dispatch(setModule(moduleName.USER))} />
      </View>
    </View>
  )
}