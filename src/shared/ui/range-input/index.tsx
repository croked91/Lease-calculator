import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

type RangeInput = {
  min: number,
  max: number,
  step: number,
  value: number,
  disabled: boolean
  callback?: (e: React.ChangeEvent<HTMLInputElement>)=>void
}

export const RangeInput: React.FC<RangeInput> = ({ 
  min, max, step, value, callback, disabled 
}) => {

  const [rangeValue, setRangeValue] = useState(value)
  const [valPercent, setValPercent] = useState(0)
  const ref = useRef<HTMLInputElement>(null)



  useEffect(() => {
    const initGradient = (value - min) / (max - min) * 100
    setValPercent(initGradient)
    setRangeValue(value)
  }, [value])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValPercent = ((Number(ref.current?.value) - min) / (Number(ref.current?.max) - min)) * 100
    setValPercent(newValPercent)
    setRangeValue(Number(e.currentTarget.value))
    callback && callback(e)
  }

  return (
    <>
      <input
        ref={ref}
        step={step}
        min={min}
        max={max}
        style={{ background: `linear-gradient(to right, #FF9514 ${valPercent}%, transparent ${valPercent}%)` }}
        value={rangeValue}
        type="range"
        disabled={disabled}
        className={styles.range}
        onChange={e => onChangeHandler(e)}
      />
      <div className={styles.underline} />
    </>
  )
}
