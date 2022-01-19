type Props = {
    name: string;
    change: Function;
}   
   
   const Users = ({name, change}: Props) => {
       return  (
        <div>
        <h1>Tela de usuário: {name}</h1>
        <button onClick={() => change('veio do users')} >click</button>
        </div>
       );
   } 

export default Users;