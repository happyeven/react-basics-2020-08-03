import { createReducer } from '@reduxjs/toolkit';
import {INCREMENT,DECREMENT,COUNTERUNMOUNT} from '../action/ActionType'

const initState = {
    totalValue: 0
}

export default createReducer(initState,{
    [INCREMENT] : (state , action) =>({
        totalValue : state.totalValue + 1
    }),
    [DECREMENT] : (state,action) => ({
        totalValue : state.totalValue - 1
    }),
    [COUNTERUNMOUNT] : (state,action) => {
         return {totalValue : state.totalValue - action.payload.value}}
        
})
