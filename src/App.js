// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import DetailsScreen from "./components/details-page";
import Profile from "./components/Profile/profile";
import BookShelf from "./components/BookShelf/bookshelf";
import Login from "./components/Login/login";
import Register from "./components/Register/register";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Route path={["/","/books/:bookId"]} exact={true}  component={Home}/>
          {/*<Route path={"/books/:bookId"} exact={true}  component={Home}/>*/}
          <Route path="/details/:bookId" exact={true}  component={DetailsScreen}/>
          <Route path="/user/profile" exact={true} component={Profile}/>
          <Route path="/bookshelf/:bookId" exact={true} component={BookShelf}/>
          <Route path="/users/login" exact={true} component={Login}/>
          <Route path="/users/register" exact={true} component={Register}/>
        </div>

      </BrowserRouter>
  );
}

export default App;
