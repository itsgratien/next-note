import React from 'react'
import { NewspaperOutline } from 'react-ionicons'
import styles from './NoteItem.module.scss'

interface NoteItemType {
  _id: string
  title: string
  description: string
}
interface Props {
  item: NoteItemType
}

const NoteItem = (props: Props) => {
  const { item } = props
  return (
    <div className={`relative ${styles.noteItem}`}>
      <div className="flex items-center">
        <NewspaperOutline />
        <span>{item.title}</span>
      </div>
      <div>
        <span>{item.description}</span>
      </div>
    </div>
  )
}

export default NoteItem
