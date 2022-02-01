import {Switch, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import PostingPage from './pages/PostingPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={MainPage} ></Route>
        <Route exact path='/posting' component={PostingPage} ></Route>
      </Switch>
    </>
  );
}

export default App;
