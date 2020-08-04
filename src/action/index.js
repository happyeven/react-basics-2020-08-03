import { createAction } from '@reduxjs/toolkit'
import { DECREMENT, INCREMENT } from '../action/actionType'
export const addNumberAction = createAction(INCREMENT)