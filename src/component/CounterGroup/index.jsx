import React from 'react';
import Counter from '../Counter'
import { connect } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../action/actionType'
import { addNumberAction } from '../.././action'
import PropTypes from 'prop-types'
class CounterGroup extends React.Component {
    constructor(props) {
        console.log(props.totalValue);
        super(props)
        this.state = { size: 0 }
    }
    onChangesize = (event) => {
        let newSize = event.target.value.match(/\d+/g)
        if (newSize === null) {
            return
        }
        newSize = newSize.join("")
        if (this.state.size === parseInt(newSize)) {
            return
        }
        this.setState({
            size: parseInt(newSize),
            totalValue: 0
        })
    }

    handleValueChange = () => {
        this.setState({ totalValue: this.props.store.getState() })
    }
    render() {
        const initArray = [...Array(this.state.size).keys()]
        return <div>
            <div>
                <label>
                    Counter Size :
                <input onBlur={this.onChangesize} defaultValue="0" />
                </label>
            </div>
            <div>
                <label>
                    totalValue : <mark>{this.props.totalValue}</mark>
                </label>
            </div>
            {
                initArray.map(key => <Counter
                    store={this.store}
                    key={key}
                    handleValueChange={this.handleValueChange}
                    id={key}
                    addNumber={this.props.addNumber}
                    decrement={this.props.decrement}
                />)
            }
        </div>
    }
}
CounterGroup.propTypes = {
    addNumber: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return { totalValue: state.totalValue }
}

const mapDispatchToProps = dispatch => ({
    addNumber: addNumberAction,
    decrement: () => dispatch({ type: DECREMENT }),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)
