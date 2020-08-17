import React from 'react';
import Counter from '../Counter'
import { connect } from 'react-redux';


class CounterGroup extends React.Component {
    constructor(props) {
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
        })
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
                    key={key}
                    id={key}
                />)
            }
        </div>
    }
}
const mapStateToProps = state => {
    return {
        totalValue: state.totalValue
    }
}


export default connect(mapStateToProps)(CounterGroup)
