import React, {useEffect, useState} from 'react'
import { View, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { openNoteModal, saveNewNote, initData, deleteNote, showLoading } from "../../duck/action"
import style from "./style"
import { IStoreState, INote } from '../../duck/type';
import {StiTxt} from "../controls/input"
import {StiView} from "../controls/other"
import moment from "moment"
import {uniqueId} from "lodash"

import NoteCrud from "./crud"
import { StiIconFontAwesome5 } from '../../components/controls/icon';

interface IProps {
  notes: INote[],
  crudModalOpen: boolean,
  note: INote,
  loaded: boolean
}

const getDefaultNote = (): INote => ({
  title: "",
  timestamp: Date.now(),
  content: "",
  id: uniqueId(`sti_note_${Date.now()}`)
})

export default () => {
  const dispatch = useDispatch();
  const props: IProps = useSelector(({ reducer }: IStoreState) => {
    return {
      notes: reducer.notes,
      crudModalOpen: reducer.crudModalOpen,
      note: reducer.selectedNote || {},
      loaded: reducer.loaded
    }
  })

  const [showCrud, setShowCrud] = useState<boolean>(false)
  const [currentNote, setCurrentNote] = useState<INote>(getDefaultNote())

  useEffect(() => {
    dispatch(initData())
  }, [props.loaded])

  const createUpdateNote = (note: INote) => {
    setCurrentNote(note ? {...note} : getDefaultNote())
    setShowCrud(true)
  }

  return (
    <View style={style.container}>
      <NoteCrud note={currentNote} show={showCrud} 
        onClose={() => setShowCrud(false)}
        onSave={(updatedNote: INote) => {
          if (updatedNote) {
            dispatch(saveNewNote(updatedNote))
          }
          setShowCrud(false)
        }} />

      {props.notes.length === 0 && <StiView style={style.center}>
        <StiTxt>No Result found.</StiTxt>
      </StiView>}

      {props.notes.length > 0 && <ScrollView style={style.list}>
        {props.notes.map((noteItem: INote, idx: number) => (<TouchableOpacity 
          key={noteItem.id} 
          onPress={() => createUpdateNote(noteItem)}>
            <View style={style.listItem}>
              <View style={style.listItem2}>
                <StiIconFontAwesome5 name="ban" color="red" onPress={() => dispatch(deleteNote(noteItem.id))} />
                {noteItem && <StiTxt style={style.title}>{noteItem.title}</StiTxt>}
              </View>
              {noteItem && <StiTxt style={{fontSize: 12, color: "grey"}}>{moment(noteItem.timestamp).format("DD/MM/YYYY HH:mm")}</StiTxt>}
            </View>
        </TouchableOpacity>))}
      </ScrollView>}

      {!showCrud && <View style={style.plusBtn}>
        <StiIconFontAwesome5 name="plus" size={25} color="white" onPress={() => createUpdateNote(null)} />
      </View>}
    </View>
  )
}