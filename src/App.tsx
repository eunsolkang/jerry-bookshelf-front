import {Switch, Route} from 'react-router-dom'
import MainComponent from './components/MainComponent';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={MainPage} ></Route>
      </Switch>
    </>
  );
}

export default App;
