import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { addSpacesToNumber } from 'shared/lib/helpers'
import styles from './styles.module.scss'

type TextInput = {
  min: number,
  max: number,
  value: number,
  maxlenght?: number,
  disabled: boolean
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: React.FC<TextInput> = ({ 
  min, max, value, callback, maxlenght, disabled
}) => {

  const [newValue, setNewValue] = useState("")

  useEffect(() => {
    value > max
      ?
      setNewValue(addSpacesToNumber(max))
      :
      setNewValue(addSpacesToNumber(value))
  }, [value])

  return (
    <input
      min={min}
      max={max}
      type="text"
      maxLength={maxlenght}
      value={newValue}
      disabled={disabled}
      className={styles.input}
      onChange={e => { callback && callback(e) }}
    />
  )
}
