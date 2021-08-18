import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import { SearchOutline, PowerOutline } from 'react-ionicons'

const Header = () => {
  return (
    <header
      className={classNames(
        'flex items-center justify-between bg-white',
        styles.header
      )}
    >
      <div className={classNames(styles.logo)}>
        <img src="/favicon.ico" alt="" />
      </div>
      <div
        className={classNames(
          styles.searchBar,
          'flex items-center border border-fc'
        )}
      >
        <input
          type="text"
          placeholder="search"
          className={classNames('outline-none focus:outline-none border-none')}
        />
        <SearchOutline color="black" width="40px" height="40px" />
      </div>
      <div className={classNames(styles.logout)}>
        <button
          type="button"
          className={classNames(
            styles.logoutButton,
            'border-none outline-none focus:outline-none cursor-pointer bg-f8 flex items-center justify-center'
          )}
        >
          <PowerOutline width="30px" height="30px" color="black" />
        </button>
      </div>
    </header>
  )
}
export default Header
