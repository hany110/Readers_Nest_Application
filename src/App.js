// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import DetailsScreen from "./components/details-page";
import Profile from "./components/Profile/profile";
import BookShelf from "./components/BookShelf/bookshelf";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/details/:bookId" exact={true}  component={DetailsScreen}/>
          <Route path="/profile" exact={true} component={Profile}/>
          <Route path="/bookshelf" exact={true} component={BookShelf}/>
        </div>

      </BrowserRouter>
  );
}

export default App;
