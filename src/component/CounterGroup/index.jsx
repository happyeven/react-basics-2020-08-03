import React from 'react';
import Counter from '../Counter'
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { size: 0, totalValue: 0 }
    }
    onChangesize = (event) => {
        let newSize = event.target.value
        let regString = /[a-zA-Z]+/
        if (regString.test(newSize)) {
            return
        }
        this.setState({
            size: parseInt(newSize),
            totalValue: 0
        })
    }

    handleIncrease = () => {
        this.setState(prevState => ({
            totalValue: prevState.totalValue + 1
        }))
    }

    handleDecrease = () => {
        this.setState(prevState => ({
            totalValue: prevState.totalValue - 1
        }))
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
                    totalValue : <mark>{this.state.totalValue}</mark>
                </label>
            </div>
            {
                initArray.map(key => <Counter onIncrease={this.handleIncrease} groupSize={this.state.size} onDecrease={this.handleDecrease} key={key} />)
            }
        </div>
    }
}

export default CounterGroup