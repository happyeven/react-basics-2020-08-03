import counter from '.././reducers'
import { createStore } from 'redux'

const store = createStore(counter)
export default store