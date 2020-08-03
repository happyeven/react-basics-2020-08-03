import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0}
    }

    onIncrease = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }))
    }
    onDecrease = () => {
        this.setState(prevState => ({ value: prevState.value - 1 }))
    }
    render() {
        return <div>
            <button onClick={this.onDecrease}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.onIncrease}>+</button>
        </div>
    }
}

export default Counter;