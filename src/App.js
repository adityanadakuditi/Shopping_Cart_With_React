import React from 'react';
import Products from './componenets/Products';
import Filter from './componenets/Filter';
import Cart from './componenets/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {

 render(){
  return (
  <Provider store={store}>
    <div className="grid-container">
      <header>
        <a href="/"> Shopping Cart With React  </a>
      </header>
      <main>
        <div className="content">
          <div className="main">
          <Filter></Filter>
            <Products></Products>
          </div>
          <div className="sidebar"> 
            <Cart></Cart>
          </div>
        </div>
      </main>
      <footer>
        All Rights Reservered at Aditya Nadakuditi
      </footer>
    </div>
  </Provider>
  );
 }
}
export default App;
