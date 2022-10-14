import React from 'react'
import styles from './styles.module.scss'

type H1 = {
    children?: React.ReactNode
}

export const H1:React.FC<H1> = ({children}) => {
  return (
    <h1 className={styles.h1}>{children}</h1>
  )
}
