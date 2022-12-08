import React ,{ useState, useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
import Header from "./Header";
import Sidebar from "./Sidebar";
import crud from '../utils/crud';


const Admin = () => {
    const navigate = useNavigate();
   
    useEffect(() =>{
    const autenticarUsario = async () => {
        const token = localStorage.getItem('token')
        console.log(token)
        if(!token){
            navigate("/login");
        }
    }
    autenticarUsario()
   },[]);
   


   const [categoria, setCategorias] = useState([]);

   const cargarCategorias = async () => {
       const response = await crud.GET(`/api/categorias`);
       console.log(response);
       setCategorias(response.categoria);
   }

   useEffect(() => {
       cargarCategorias();
   }, [])


return (
    <>
    
    <Header/>
<div className="md:flex md:min-h-screen">
<Sidebar/>
   <main className= 'flex-1'>
   <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
    Listado de catrgorias
    </h1>
    <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>Id</th>
                                        <th style={{ width: '75%' }}>Nombre</th>
                                        <th style={{ width: '15%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                
                               
                                <tbody className="bg-white">
                                    {
                                        categoria.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.nombre}</td>
                                                    <td>
                                               </td>
                                               <td>
                                                        <Link  >crear producto</Link>&nbsp;&nbsp;
                                                        <Link >Editar</Link>&nbsp;&nbsp;
                                                        <button  >Eliminar</button>
                                                    </td>
                                                </tr>
                                        )
                                    }

                            
                                </tbody>
                                <tbody>
                                

                                </tbody>
                            </table>
   </main>
</div>

   </>
    );
}

export default Admin;