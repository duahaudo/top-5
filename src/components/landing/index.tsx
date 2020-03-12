import React, { useState, useEffect, useMemo } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { StiInput, StiTxt } from "../controls/input"
import { useDispatch, useSelector } from "react-redux"
import moment from 'moment';
import {IStoreState, IAction} from "../../duck/type"
import style from "./style"

import { saveAsyncStore, getAsyncStore } from "../../duck/helper"

interface IProps {
  todayActions: IAction[]
}

export default () => {
  const [actions, setActions] = useState<string[]>([]);
  useEffect(() => {
    getAsyncStore("top5").then((currentActions: string) =>{
      if (currentActions) {
        setActions(JSON.parse(currentActions))
      }
    })
  }, [])

  return (
    <View style={style.landing}>
      <View style={style.contentBox}>
        {[1, 2, 3, 4, 5].map((item: number, idx: number) => {
          return <View style={style.line} key={idx}>
            <StiInput title="" value={actions[idx] || ""} 
              style={style.textbox}
              onChangeText={(text: string) => {
                let tmpActions = [...actions];
                tmpActions[idx] = text;
                setActions(tmpActions)

                saveAsyncStore("top5", JSON.stringify(tmpActions))
              }}/>
          </View>
        })}
      </View>
    </View>
  )
}