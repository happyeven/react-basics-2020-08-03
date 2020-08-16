import { createReducer } from '@reduxjs/toolkit';
import {INCREMENT,DECREMENT,COUNTERUNMOUNT} from '../action/ActionType'
export default createReducer(0,{
    [INCREMENT] : (state , action) =>({
        totalValue : state + 1
    }),
    [DECREMENT] : (state,action) => ({
        totalValue : state - 1
    }),
    [COUNTERUNMOUNT] : (state,action) => ({
        totalValue : state - action.payload
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