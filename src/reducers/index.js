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
    [COUNTERUNMOUNT] : (state,action) => ({
        totalValue : state.totalValue - action.payload
    })
})


// export default (state = 0, action) => {
//     console.log(action,state)
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         case 'COUNTERUNMOUNT':
//             return state - action.value
//         default:
//             return state
//     }
// }