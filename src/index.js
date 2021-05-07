import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import {store,persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import { ApolloProvider,ApolloClient} from '@apollo/client';
import { InMemoryCache } from "@apollo/client/cache"; 

const client = new ApolloClient({ uri:'https://www.crwn-clothing.com/', cache:new InMemoryCache()});

// client.query({
//   query:gql`
//   {
//     collections {
//       id
//       title
//     }
//   }
//   `
// }).then((result)=>console.log(result))

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
