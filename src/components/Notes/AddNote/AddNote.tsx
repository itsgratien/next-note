import React from 'react'
import styles from './AddNote.module.scss'
import classnames from 'classnames'

interface Props {}

const AddNote = (props: Props) => {
  return (
    <div className={classnames(styles.addNote, 'fixed inset-0')}>
      <div className={classnames(styles.addNoteModal, 'relative bg-white')}>
        <form action="#" autoComplete="off">
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Title"
              className="outline-none bg-none focus:outline-none text-14 border border-f8"
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea
              placeholder="Description"
              className="outline-none bg-none focus:outline-none w-full text-14 border border-f8"
            ></textarea>
          </div>
          <div className={styles.inputGroup}>
            <button
              type="button"
              className="outline-none bg-none focus:outline-none text-14 bg-black text-white p-3 rounded font-bold"
            >
              Add note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default AddNote
