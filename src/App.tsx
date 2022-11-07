import {Switch, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import AddBookPage from './pages/AddBookPage';
import LoginPage from "./pages/LoginPage";
import BookDetailPage from './pages/BookDetailPage';
import { ThemeProvider } from 'styled-components';
import theme from './lib/styles/theme';
import {Provider} from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from "react-query";
import ModalWrapper from './components/modal/ModalWrapper';
import IntroPage from './pages/IntroPage';
import SplashPage from './pages/SplashPage';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Switch>
              <Route exact path='/' component={MainPage} ></Route>
              <Route exact path='/book/:id' component={BookDetailPage} ></Route>
              <Route exact path='/login' component={LoginPage} ></Route>
              <Route exact path='/posting' component={AddBookPage} ></Route>
              <Route exact path='/intro' component={IntroPage} ></Route>
              <Route exact path='/splash' component={SplashPage} ></Route>
          </Switch>
          <ModalWrapper></ModalWrapper>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
