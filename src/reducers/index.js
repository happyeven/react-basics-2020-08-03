export default (state = 0, action) => {
    console.log(action,state)
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'counterUnmount':
            return state - action.value
        default:
            return state
    }
}