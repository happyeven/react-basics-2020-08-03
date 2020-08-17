import React from 'react';
import {increment,decrement,decreCounterValue} from '../../action';
import { connect } from 'react-redux';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0}
    }

    handleIncrease = () => {
        this.setState(prevState => ({ value: prevState.value + 1 }))
        this.props.increment()
    }
    handleDecrease = () => {
        this.setState(prevState => ({ value: prevState.value - 1 }))
        this.props.decrement()
    }
    render() {
        return <div>
            <button onClick={this.handleDecrease}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.handleIncrease}>+</button>
        </div>
    }

    componentWillUnmount() {
        this.props.decreCounterValue(this.state.value)
    }
}
const mapDispatchToProps = ({
    increment: increment,
    decrement: decrement,
    decreCounterValue: decreCounterValue
})
export default connect(null,mapDispatchToProps)(Counter)
