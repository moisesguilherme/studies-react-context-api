import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

 const Home = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)

    return  (
     <div>
         <h1>Aqui é tela home </h1>
         <h4>Valor do theme: theme</h4>
         <button onClick={() => setTheme('DARK')} >DARK MODE</button>
         <button onClick={() => setTheme('LIGHT')} >LIGHT MODE</button>  
     </div>
    );
} 

export default Home;