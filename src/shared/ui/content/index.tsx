import React from 'react'
import styles from './styles.module.scss'

type Content = {
    children?: React.ReactNode
}

export const Content:React.FC<Content> = ({children}) => {
  return (
    <div className={styles.content}>{children}</div>
  )
}
