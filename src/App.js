import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import User from './components/User/User';
import product from './components/Product/Product';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/users" component={User}/>
        <Route exact path="/products" component={product}/>
        <Route component={PaginaNoEncontrada} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
