import React from 'react';
import store from '../../store'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0, groupSize: 0 }
    }

    handleIncrease = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }))
        store.dispatch({ type: 'INCREMENT' })
        this.props.handleValueChange()
    }
    handleDecrease = () => {
        this.setState(prevState => ({ value: prevState.value - 1 }))
        store.dispatch({ type: 'DECREMENT' })
        this.props.handleValueChange()
    }
    render() {
        return <div>
            <button onClick={this.handleDecrease}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.handleIncrease}>+</button>
        </div>
    }

    componentWillUnmount() {
        if (this.state.value > 0) {
            for (let i = 0; i < this.state.value; i++) {
                store.dispatch({ type: 'DECREMENT',value : this.state.value })
            }
            console.log(store.getState())
            this.props.handleValueChange();
            return;
        }
        for (let i = 0; i < this.state.value * (-1); i++) {
            store.dispatch({ type: 'INCREMENT',value : this.state.value })
        }
        this.props.handleValueChange();
    }
}

export default Counter;