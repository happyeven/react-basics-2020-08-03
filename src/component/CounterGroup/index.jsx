import React from 'react';
import Counter from '../Counter'
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { size: 0}
    }
    onChangesize = (event) => {
        let newSize = event.target.value
        let regString = /[a-zA-Z]+/
        if (regString.test(newSize)) {
            return
        }
        this.setState({
            size: parseInt(newSize)
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
            {
                initArray.map(key => <Counter onIncrease={this.handleIncrease} onDecrease={this.handleDecrease} key={key} />)
            }
        </div>
    }
}

export default CounterGroup