import { useState } from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./Home";
import NavBar from "./Navbar";
import Users from "./User";

const Routes = () => {
    
    const [dataGlobal, setDataGlobal] = useState<string>('Vazio');

    function change(text: string){
        setDataGlobal(text);
    }
    return (

    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/users">
                <Users name={dataGlobal} change={(text: string) => change(text)}/>
            </Route>
            <Route path="/">
                <Home name={dataGlobal} change={(text: string) => change(text)} />
            </Route>
        </Switch>
    </BrowserRouter>
)
};

export default Routes;