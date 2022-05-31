import React from 'react'
import styles from './NoteItem.module.scss'
import { NewspaperOutline } from 'react-ionicons'
import { useRouter } from 'next/router'
import classNames from 'classnames'

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

  const route = useRouter()

  const handleViewSingleNote = () => route.push('/')

  return (
    <div
      className={classNames(styles.noteItem, 'border border-fc cursor-pointer')}
      onClick={handleViewSingleNote}
    >
      <div className="flex">
        <NewspaperOutline width="30px" height="30px" />
        <span className={classNames('text-14 ml-2')}>{item.title}</span>
      </div>
      <div className="mt-2">
        <span className="text-14">{item.description}</span>
      </div>
    </div>
  )
}

export default NoteItem
