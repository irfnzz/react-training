import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
import Loginpage from "./client/Login";
import Mainmenu from "./client/Main";


function App() {


  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Loginpage} />
        <Route path="/main" component={Mainmenu} />
      </BrowserRouter>
    </div>
  );
}

export default App;
