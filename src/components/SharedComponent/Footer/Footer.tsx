import React from 'react'
import styles from './Footer.module.scss'
import classnames from 'classnames'
import { ArrowForwardOutline, Add } from 'react-ionicons'

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer
      className={classnames(
        styles.footer,
        'flex items-center justify-between bg-white fixed inset-x-0 bottom-0 border border-top-width-1 border-f8'
      )}
    >
      <div className="flex items-center">
        <ArrowForwardOutline color="black" width="30px" height="30px" />
        <span className="text-14 ml-2">
          welcome back <b>john doe</b>
        </span>
      </div>
      <div className={classnames(styles.addButton)}>
        <button
          type="button"
          className={classnames(
            styles.addNoteButton,
            'top-0 bg-black flex items-center justify-center'
          )}
        >
          <Add color="white" width="40px" height="40px" />
        </button>
      </div>
    </footer>
  )
}
export default Footer
