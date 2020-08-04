import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.store = props.store
        this.state = { value: 0, groupSize: 0 }
    }

    handleIncrease = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }))
        this.props.addNumber()
        this.props.handleValueChange()
    }
    handleDecrease = () => {
        this.setState(prevState => ({ value: prevState.value - 1 }))
        this.props.decrement()
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
                this.props.decrement()
            }
            this.props.handleValueChange();
            return;
        }
        for (let i = 0; i < this.state.value * (-1); i++) {
            this.props.addNumber()
        }
        this.props.handleValueChange();
    }
}
Counter.propTypes = {
    addNumber: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Counter;