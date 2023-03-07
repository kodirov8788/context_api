import './App.css';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Typing from './components/Typing';
import Product from './components/Product';
function App() {

  const { setInputData } = useContext(UserContext)


  return (
    <div className="App">
      <h1>Hello</h1>
      <input type="text" onChange={(e) => setInputData(e.target.value)} />
      <Typing />
      <Product />
    </div>
  );
}

export default App;
