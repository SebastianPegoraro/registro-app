import './App.css';
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import Home from "./routes/Home"
import Registro from "./routes/Registro"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          
          <Route path="/registro">
            <Registro />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
