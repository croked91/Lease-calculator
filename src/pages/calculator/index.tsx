import React from 'react'
import { H1 } from 'shared/ui/H1'
import { Calculate } from 'features/calculate/ui'
import styles from './styles.module.scss'

export const Calculator = () => {
    return (
        <div className={styles.calculator}>
            <header className={styles.header}>
                <H1>
                    Рассчитайте стоимость автомобиля в лизинг
                </H1>
            </header>
                <Calculate />
        </div>
    )
}
