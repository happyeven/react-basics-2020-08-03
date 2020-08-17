import { createAction } from '@reduxjs/toolkit';
import { INCREMENT, DECREMENT, COUNTERUNMOUNT } from './ActionType'

export const increment = createAction(INCREMENT, (item) => ({ payload: { item } }))
export const decrement = createAction(DECREMENT, (item) => ({ payload: { item } }))
export const decreCounterValue = createAction(COUNTERUNMOUNT, (value) => ({ payload: { value } }))
