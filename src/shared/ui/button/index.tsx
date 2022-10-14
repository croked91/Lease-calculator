import React from 'react'
import styles from './styles.module.scss'

type Button = {
  children?: React.ReactNode
  callback?: () => void
  disabled?: boolean
  isLoading?: boolean
}

export const Button: React.FC<Button> = ({ children, callback, disabled, isLoading }) => {
  
  
  return (
    <button
      onClick={callback}
      className={disabled ? styles.buttons : styles.button }
      disabled={disabled}
    >
      {disabled ? <i className={styles.buttons}/> : children}  
    </button>
  )
}
