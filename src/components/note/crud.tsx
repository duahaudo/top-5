import React, { useState, useEffect, useCallback } from "react"
import { View, Modal, Alert } from "react-native"
import { INote } from "../../duck/type"
import { StiInput, StiTxt } from "../controls/input"
import { StiBtn } from "../controls/button"
import { StiModal } from "../controls/other"
import style from "./style"

export default ({ note, show, onClose, onSave }) => {
  const [currentNote, setNote] = useState<INote>(note)

  useEffect(() => {
    setNote({...note})
  }, [note])

  const onSaveHandler = useCallback(() => {
    if (!currentNote.title && !currentNote.content) {
      Alert.alert(
        "Error",
        "Please input title or content.",
        [
          { text: 'OK', onPress: () => {}}
        ]
      )
    } else {
      onSave(currentNote)
    }
  }, [currentNote])

  return (
    <StiModal show={show}>
      <View style={style.modal}>
        <View style={style.modalTitle}>
          <StiTxt style={style.modalTitleText}>Create Update</StiTxt>
        </View>
        <View style={style.modalBody}>
          <View style={style.inputs}>
            <StiInput title="Title" value={currentNote.title} onChangeText={(text: string) => setNote({ ...currentNote, title: text })} />
            <StiInput title="Content" value={currentNote.content} style={{ height: 250 }}
              onChangeText={(text: string) => setNote({ ...currentNote, content: text })} multiline={true} numberOfLines={4} />
          </View>
          <View style={style.groupBtns}>
            <View style={{...style.saveBtnItem, ...style.noPaddingLeft}}>
              <StiBtn onPress={() => onSaveHandler()} title="Save" />
            </View>
            <View style={{...style.saveBtnItem, ...style.noPaddingRight}}>
              <StiBtn onPress={() => onClose()} title="Close" style={style.closeModalBtn} />
            </View>
          </View>
        </View>
      </View>
    </StiModal>
  )
}