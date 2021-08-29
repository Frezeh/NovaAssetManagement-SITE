import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import 'fontsource-roboto';
import { BrowserRouter } from 'react-router-dom';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';    

const store = ConfigureStore();

ReactDOM.render(
  <React.StrictMode>
          <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
