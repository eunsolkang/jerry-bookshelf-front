import {Switch, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import AddBookPage from './pages/AddBookPage';
import LoginPage from "./pages/LoginPage";
import BookDetailPage from './pages/BookDetailPage';
import { ThemeProvider } from 'styled-components';
import theme from './lib/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
          <Route exact path='/' component={MainPage} ></Route>
          <Route exact path='/book/:id' component={BookDetailPage} ></Route>
          <Route exact path='/login' component={LoginPage} ></Route>
          <Route exact path='/posting' component={AddBookPage} ></Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
