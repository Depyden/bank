import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from './components/Main'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/cards' component={Cards} />
			</Switch>
		</Router>
    </div>
  );
}

export default App;
