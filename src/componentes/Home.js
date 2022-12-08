import React from "react";
import { Link} from 'react-router-dom';


const Home = () => {
   //poder redireccionar de un componente a otro
 


return (
   <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
 
   <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
    home
    </h1>
    <Link
        className="block text-center my-5 "
      to={"/login"}
      >
        Inicio de sesión
      </Link>

    
   </main>
    );
}

export default Home;