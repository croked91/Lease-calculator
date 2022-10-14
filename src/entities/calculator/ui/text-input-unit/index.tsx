import React, { useState } from 'react'
import { H2 } from 'shared/ui/H2'
import { H3 } from 'shared/ui/H3'
import { RangeInput } from 'shared/ui/range-input'
import { TextInput } from 'shared/ui/text-input'
import styles from './styles.module.scss'

type TextInputUnit = {
    percentValue: number
    countValue: number
    min: number
    max: number
    step: number
    unit: string
    disabled: boolean
    children: React.ReactNode
    callback?: (e: React.ChangeEvent<HTMLInputElement>) => void
    customClassName?: string
}


export const TextInputUnit: React.FC<TextInputUnit> = ({
    countValue, percentValue, min, max, step, unit, children, callback, disabled, customClassName
}) => {

    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={[styles.inputBlockWithTitle, customClassName].join(' ')}>
            <H3>{children}</H3>
            <div className={isFocused ? styles.focusedInputBlock : styles.inputBlock}>
                <div className={styles.inputTextBlock}>
                    <H2>{Intl.NumberFormat('ru-RU').format(countValue)}</H2>
                    <div
                        className={styles.inputPercentBlock}
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                    >
                        <TextInput
                            min={min}
                            max={max}
                            value={percentValue}
                            callback={callback}
                            disabled={disabled}
                        />
                        <span>{unit}</span>
                    </div>
                </div>
                <div
                    onMouseUp={() => setIsFocused(false)}
                    onMouseDown={() => setIsFocused(true)}
                >
                    <RangeInput
                        min={min}
                        max={max}
                        step={step}
                        value={percentValue}
                        callback={callback}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    )
}
