
import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Item name="Macbook Pro" price = {10000} />
      <Item name="Mobile" price={1000} />
      <Item name="pendrive" price={100} />
      <Cart />
    </div>
  );
}

export default App;
