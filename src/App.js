// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import DetailsScreen from "./components/details-page";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/details/:bookId" exact={true}  component={DetailsScreen}/>
        </div>

      </BrowserRouter>
  );
}

export default App;
