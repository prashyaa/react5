import './App.css';
import Counter from './Comoponents/Counter';
import HigherOrderComp from './Comoponents/HigherOrderComp';
import Hover from './Comoponents/Hover';
import HOC from './Comoponents/HOC';
import PureComp from './Comoponents/PureComp';
function App() {
  return (
    <div className="App">
      <Counter/>
      <HigherOrderComp/>
      <Hover/>
      <HOC/>
      <PureComp/>
    </div>
  );
}

export default App;
