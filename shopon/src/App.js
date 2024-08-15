import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header"
import Home from './modules/Home';
import {Routes , Route} from 'react-router-dom'
import ProductDetail from "./modules/ProductDetail"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
         <Route  path ="/" exact element = {<Home/>}/>
         <Route  path ="/products/:id" element = {<ProductDetail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
