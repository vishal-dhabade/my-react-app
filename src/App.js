import logo from './logo.svg';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {NavBar} from "./Components/NavBar";
import {Corosal} from "./Components/Corosal";
import Loader from "react-loader-spinner";
import {Home} from "./Components/Home";
import {Login} from "./Components/Login";
import {Signup} from "./Components/Signup";
import {Search} from "./Components/Search";
import {PageNotFound} from "./Components/PageNotFound";

import {BrowserRouter as Router , Route} from "react-router-dom"


function App() {
  return (
    <Router>
      
    <NavBar></NavBar>
    <switch>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Signup" component={Signup}></Route>
      <Route exact path="/Search" component={Search}></Route>
      <Route exact path="/Corosal" component={Corosal}></Route>
      <Route exact path="/PageNotFound" component={PageNotFound}></Route>
      </switch>
      </Router>
    // <div className="App">
      
    //   <Loader
    //     type="Grid"
    //     color="#00BFFF"
    //     height={100}
    //     width={100}
    //     timeout={3000} //3 secs
    //   />
    //   <NavBar></NavBar>
    //   <Corosal></Corosal>
    // </div>
  );
}

export default App;
