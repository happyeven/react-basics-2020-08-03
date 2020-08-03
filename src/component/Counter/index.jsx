import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.store = props.store
        this.state = { value: 0, groupSize: 0 }
    }

    handleIncrease = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }))
        this.store.dispatch({ type: 'INCREMENT' })
        this.props.handleValueChange()
    }
    handleDecrease = () => {
        this.setState(prevState => ({ value: prevState.value - 1 }))
        this.store.dispatch({ type: 'DECREMENT' })
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
                this.store.dispatch({ type: 'DECREMENT' })
            }
            console.log(this.store.getState())
            this.props.handleValueChange();
            return;
        }
        for (let i = 0; i < this.state.value * (-1); i++) {
            this.store.dispatch({ type: 'INCREMENT' })
        }
        this.props.handleValueChange();
    }
}

export default Counter;