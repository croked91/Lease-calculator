import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  priceOfCar: 3300000,
  initialPaymentPercent: 13,
  initialPaymentCount: 420000,
  leasePeriod: 60,
  amount: 4467313,
  monthlyPayment: 114000,
  interestRate: 0.035
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    setPriceOfCar: (state, action) => {
      state.priceOfCar = action.payload
      state.initialPaymentCount = state.priceOfCar * state.initialPaymentPercent / 100
      state.monthlyPayment = Math.ceil((state.priceOfCar - state.initialPaymentCount) * ((state.interestRate * Math.pow((1 + state.interestRate), state.leasePeriod)) / (Math.pow((1 + state.interestRate), state.leasePeriod) - 1)))
      state.amount = state.initialPaymentCount + state.leasePeriod * state.monthlyPayment
    },
    setInitialPaymentPercent: (state, action) => {
      state.initialPaymentPercent = action.payload
      state.initialPaymentCount = state.priceOfCar * state.initialPaymentPercent / 100
      state.monthlyPayment = Math.ceil((state.priceOfCar - state.initialPaymentCount) * ((state.interestRate * Math.pow((1 + state.interestRate), state.leasePeriod)) / (Math.pow((1 + state.interestRate), state.leasePeriod) - 1)))
      state.amount = state.initialPaymentCount + state.leasePeriod * state.monthlyPayment
    },
    setLeasePeriod: (state, action) => {
      state.leasePeriod = action.payload
      state.monthlyPayment = Math.ceil((state.priceOfCar - state.initialPaymentCount) * ((state.interestRate * Math.pow((1 + state.interestRate), state.leasePeriod)) / (Math.pow((1 + state.interestRate), state.leasePeriod) - 1)))
      state.amount = state.initialPaymentCount + state.leasePeriod * state.monthlyPayment
    },
    setInitialPaymentCount: state => {
      state.initialPaymentCount = state.priceOfCar * state.initialPaymentPercent / 100
    },
    setAmount: state => {
      state.amount = Math.ceil(state.initialPaymentCount + state.leasePeriod * state.monthlyPayment)
    },
    setMothlyPayment: state => {
      state.monthlyPayment = (state.priceOfCar - state.initialPaymentCount) * ((state.interestRate * Math.pow((1 + state.interestRate), state.leasePeriod)) / (Math.pow((1 + state.interestRate), state.leasePeriod) - 1))
    },
  }
})

export const {
  setPriceOfCar,
  setInitialPaymentPercent,
  setInitialPaymentCount,
  setLeasePeriod,
  setAmount,
  setMothlyPayment } = calculatorSlice.actions

