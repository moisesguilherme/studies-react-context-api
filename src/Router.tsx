import { useState } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./Home";
import NavBar from "./Navbar";
import Users from "./User";

const Routes = () => {
    
    const [dataGlobal, setDataGlobal] = useState<string>('Vazio');

    return (

    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/users">
                <Users/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
)
};

export default Routes;