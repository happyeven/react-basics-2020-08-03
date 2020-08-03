import React from 'react';
import { createStore } from 'redux'
import counter from '../../reducers'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.store = props.store
        this.state = { value: 0, groupSize: 0 }
    }

    handleIncrease = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }))
        this.props.handleIncrease()
        this.store.dispatch({ type: 'INCREMENT' })
    }
    handleDecrease = () => {
        this.setState(prevState => ({ value: prevState.value - 1 }))
        this.props.handleDecrease()
        this.store.dispatch({ type: 'DECREMENT' })
    }
    render() {
        return <div>
            <button onClick={this.handleDecrease}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.handleIncrease}>+</button>
        </div>
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.groupSize !== state.groupSize) {
    //         return {
    //             groupSize: props.groupSize,
    //             value: 0
    //         }
    //     }
    //     return null
    // }

     componentWillUnmount() {
        console.log("come in ")
        if (this.state.value > 0) {
            this.store.dispatch({ type: 'DECREMENT' })
        }
        this.store.dispatch({ type: 'INCREMENT' })
    }
}

export default Counter;