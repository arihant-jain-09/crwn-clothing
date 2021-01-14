import './App.css';
import Hompage from './pages/homepage/homepage.component.jsx'
import {Switch,Route} from 'react-router-dom'
// import Directory from './components/directory/directory.component.jsx'
function Hats(){
  return <h1>HATS PAGE </h1>
}
function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Hompage}/>
      <Route path='/' component={Hats}/>
    </Switch>
    </div>
  );
}

export default App;
