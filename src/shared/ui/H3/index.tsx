import React from 'react'
import styles from './styles.module.scss'

type H3 = {
    children?: React.ReactNode
}

export const H3:React.FC<H3> = ({children}) => {
  return (
    <h3 className={styles.h3}>{children}</h3>
  )
}
