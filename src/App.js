import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Store from "./pages/Store";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/store' component={Store}></Route>
        <Route path='/gmail' component={Gmail}></Route>
        <Route path='/images' component={Images}></Route>
      </Switch>
    </>
  );
}

export default App;
