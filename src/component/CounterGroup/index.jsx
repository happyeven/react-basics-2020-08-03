import React from 'react';
import Counter from '../Counter'
import store from '../../store'
class CounterGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { size: 0 }
    }
    onChangesize = (event) => {
        let newSize = event.target.value.match(/\d+/g)
        if(newSize === null){
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
        this.setState({ totalValue: store.getState() })
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
                    totalValue : <mark>{store.getState()}</mark>
                </label>
            </div>
            {
                initArray.map(key => <Counter
                    store={store}
                    key={key}
                    handleValueChange={this.handleValueChange}
                />)
            }
        </div>
    }
}

export default CounterGroup