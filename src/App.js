import React from 'react';
import './App.css';
import CounterGroup from './component/CounterGroup';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <CounterGroup  store = {this.props.store}/>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  reder() {
    return (
      <div className="App">
        <header className="App-header">
          <CounterGroup store={this.props.store} />
        </header>
      </div>
    );
  }
}

export default App;
