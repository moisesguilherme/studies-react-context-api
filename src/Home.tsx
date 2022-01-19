type Props = {
    name: string;
    change: Function;
}   
  
const Home = ({name, change}: Props) => {
    return  (
     <div>
         <h1>Aqui é tela home e o data é: {name} </h1>
         <button onClick={() => change('veio do home')} >click</button>
     </div>
    );
} 

export default Home;