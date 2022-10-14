import React, { useCallback } from 'react'
import { addSpacesToNumber } from 'shared/lib/helpers'
import { Content } from 'shared/ui/content'
import { H3 } from 'shared/ui/H3'
import styles from './styles.module.scss'

type ContentUnit = {
    value: number
    children: React.ReactNode
}

export const ContentUnit: React.FC<ContentUnit> = ({
    value, children
}) => {

    const numberWithSpaces = useCallback((value: number) => {
        return addSpacesToNumber(value);
      }, [value])

    return (
        <div className={styles.contentBlock}>
          <H3>{children}</H3>
          <Content>{numberWithSpaces(value)} ₽</Content>
        </div>
    )
}
