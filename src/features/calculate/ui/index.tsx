import { setInitialPaymentPercent, setLeasePeriod, setPriceOfCar } from 'entities/calculator/model'
import { ContentUnit } from 'entities/calculator/ui/content'
import { InputUnit } from 'entities/calculator/ui/input-unit'
import { TextInputUnit } from 'entities/calculator/ui/text-input-unit'
import { carPriceConf, initialPaymentConf, leasePeriodConf } from 'features/calculate/config'
import { usePostCalculationMutation } from 'features/submit'
import React from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { Button } from 'shared/ui/button'
import styles from './styles.module.scss'

export const Calculate = () => {

    const dispatch = useAppDispatch()
    const amount = useAppSelector(store => store.calculatorSlice.amount)
    const priceOfCar = useAppSelector(store => store.calculatorSlice.priceOfCar)
    const monthlyPayment = useAppSelector(store => store.calculatorSlice.monthlyPayment)
    const initialPaymentPercent = useAppSelector(store => store.calculatorSlice.initialPaymentPercent)
    const initialCount = useAppSelector(store => store.calculatorSlice.initialPaymentCount)
    const leasePeriod = useAppSelector(store => store.calculatorSlice.leasePeriod)

    const carPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPriceOfCar(Number(e.currentTarget.value.replaceAll(' ', ''))))
    }

    const initialPaymentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInitialPaymentPercent(Number(e.currentTarget.value)))
    }

    const leasePeriodHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLeasePeriod(Number(e.currentTarget.value.replaceAll(' ', ''))))
    }

    const [postCalculation, postCalculationResult] = usePostCalculationMutation()

    const onClickHandler = () => {
        postCalculation({
            "car_coast": priceOfCar,
            "initail_payment": initialCount,
            "initail_payment_percent": initialPaymentPercent,
            "lease_term": leasePeriod,
            "total_sum": amount,
            "monthly_payment_from": monthlyPayment
        })
    }

    if (postCalculationResult.isLoading) {
        return (
            <div className={styles.calculator}>

                <div className={styles.block}>
                    <InputUnit
                        min={carPriceConf.min}
                        max={carPriceConf.max}
                        step={carPriceConf.step}
                        value={priceOfCar}
                        unit={carPriceConf.unit}
                        maxlenght={carPriceConf.maxlenght}
                        callback={carPriceHandler}
                        disabled={true}
                        customClassName={styles.opacity}
                    >
                        Стоимость автомобиля
                    </InputUnit>
                    <ContentUnit value={amount}>
                        Сумма договора лизинга
                    </ContentUnit>
                </div>
    
                <div className={styles.block}>
                    <TextInputUnit
                        percentValue={initialPaymentPercent}
                        countValue={initialCount}
                        min={initialPaymentConf.min}
                        max={initialPaymentConf.max}
                        step={initialPaymentConf.step}
                        unit={initialPaymentConf.unit}
                        callback={initialPaymentHandler}
                        disabled
                        customClassName={styles.opacity}
                        
                    >
                        Первоначальный взнос
                    </TextInputUnit>
                    <ContentUnit value={monthlyPayment}>
                        Ежемесячный платеж от
                    </ContentUnit>
                </div>
    
                <div className={styles.block}>
                    <InputUnit
                        min={leasePeriodConf.min}
                        max={leasePeriodConf.max}
                        step={leasePeriodConf.step}
                        value={leasePeriod}
                        unit={leasePeriodConf.unit}
                        maxlenght={leasePeriodConf.maxlenght}
                        callback={leasePeriodHandler}
                        disabled
                        customClassName={styles.opacity}
                    >
                        Срок лизинга
                    </InputUnit>
                    <Button disabled callback={onClickHandler}>Оставить заявку</Button>
                </div>
    
    
            </div>
        )
    }
    return (
        <div className={styles.calculator}>

            <div className={styles.block}>
                <InputUnit
                    min={carPriceConf.min}
                    max={carPriceConf.max}
                    step={carPriceConf.step}
                    value={priceOfCar}
                    unit={carPriceConf.unit}
                    maxlenght={carPriceConf.maxlenght}
                    callback={carPriceHandler}
                    disabled={false}
                >
                    Стоимость автомобиля
                </InputUnit>
                <ContentUnit value={amount}>
                    Сумма договора лизинга
                </ContentUnit>
            </div>

            <div className={styles.block}>
                <TextInputUnit
                    percentValue={initialPaymentPercent}
                    countValue={initialCount}
                    min={initialPaymentConf.min}
                    max={initialPaymentConf.max}
                    step={initialPaymentConf.step}
                    unit={initialPaymentConf.unit}
                    callback={initialPaymentHandler}
                    disabled={false}
                >
                    Первоначальный взнос
                </TextInputUnit>
                <ContentUnit value={monthlyPayment}>
                    Ежемесячный платеж от
                </ContentUnit>
            </div>

            <div className={styles.block}>
                <InputUnit
                    min={leasePeriodConf.min}
                    max={leasePeriodConf.max}
                    step={leasePeriodConf.step}
                    value={leasePeriod}
                    unit={leasePeriodConf.unit}
                    maxlenght={leasePeriodConf.maxlenght}
                    callback={leasePeriodHandler}
                    disabled={false}
                >
                    Срок лизинга
                </InputUnit>
                <Button disabled={false} callback={onClickHandler}>Оставить заявку</Button>
            </div>


        </div>
    )
}
