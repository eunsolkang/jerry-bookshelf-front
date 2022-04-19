import {Switch, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import PostingPage from './pages/PostingPage';
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Switch>
          <Route exact path='/' component={MainPage} ></Route>
          <Route exact path='/login' component={LoginPage} ></Route>
          <Route exact path='/posting' component={PostingPage} ></Route>
      </Switch>
    </>
  );
}

export default App;
