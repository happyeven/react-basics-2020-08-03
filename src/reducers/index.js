import { createReducer } from '@reduxjs/toolkit'
import { DECREMENT, INCREMENT } from '../action/actionType'
const initState = {
    totalValue: 0
}//todo why initState not can

export default createReducer(initState, {
    [INCREMENT]: ((state, action) => ({ totalValue: state.totalValue + 1 })),
    [DECREMENT]: ((state, action) => ({ totalValue: state.totalValue - 1 }))
})


// export default function a(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }