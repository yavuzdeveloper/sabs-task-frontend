import './App.css';
import Products from './Products';
import Cart from './Cart';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <h3> SABS-TASK-FRONT END
          <img
            src="https://avatars3.githubusercontent.com/u/60869810?v=4"
            alt="react"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/redux.svg"
            alt="redux"
          />
        </h3>
      </header>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
