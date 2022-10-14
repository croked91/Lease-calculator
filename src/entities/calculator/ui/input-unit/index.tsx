import React, { useState } from 'react'
import { H2 } from 'shared/ui/H2'
import { H3 } from 'shared/ui/H3'
import { RangeInput } from 'shared/ui/range-input'
import { TextInput } from 'shared/ui/text-input'
import styles from './styles.module.scss'

type InputUnit = {
    value: number
    min: number
    max: number
    step: number
    unit: string
    maxlenght: number
    children: React.ReactNode
    callback?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled: boolean
    customClassName?: string
}

export const InputUnit: React.FC<InputUnit> = ({
    value, min, max, step, unit, callback, maxlenght, children, disabled, customClassName
}) => {

    const [isFocused, setIsFocused] = useState(false)



    return (
        <div className={[styles.inputBlockWithTitle, customClassName].join(' ')}>
            <H3>{children}</H3>
            <div
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                className={isFocused ? styles.focusedInputBlock : styles.inputBlock}
            >
                <div className={styles.inputTextBlock}>
                    <TextInput
                        min={min}
                        max={max}
                        value={value}
                        callback={callback}
                        maxlenght={maxlenght}
                        disabled={disabled}
                    />
                    <H2>{unit}</H2>
                </div>
                <div
                    onMouseUp={() => setIsFocused(false)}
                    onMouseDown={() => setIsFocused(true)}
                >
                    <RangeInput
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        callback={callback}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    )
}
