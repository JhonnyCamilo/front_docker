import React ,{ useState, useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
import Header from "./Header";
import Sidebar from "./Sidebar";
import crud from '../utils/crud';


const CrearCategoria = () => {
    
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
   
  

    const [categoria, setCategoria] = useState({
        nombre: ''
    });
 
    const { nombre } = categoria;
 
    const onChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }
    const crearCategoria = async () => {
     const data = {
         nombre: categoria.nombre,
       
     }
 
     const response = await crud.POST(`/api/categorias`, data);
 
     const mensaje = response.msg;
     console.log(mensaje);
 
     navigate("/admin");
 }
 
 const onSubmit = (e) => {
     e.preventDefault();
     crearCategoria();
 }



return (
    <>
    
    <Header/>
<div className="md:flex md:min-h-screen">
<Sidebar/>
   <main className= 'flex-1'>
   <div className='mt-10 flex justify-center' >
   <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
    crear catrgorias
    </h1>
   </div>
   
    <div className='mt-10 flex justify-center'>
    <form 
   onSubmit={onSubmit}
    className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
      <div className="my-5">
        <label className="uppercase text-gray-600 block text-lx font-bold">Email</label>
        <input 
        type="nombre"
        id="nombre"
        name="nombre"
        placeholder="Nombre"
        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
        value={nombre}
        onChange={onChange}
        />

       
      </div>
      <input 
          type="submit"
          value="Iniciar Sesión"
          className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
            />

      
  </form>
  </div>
   </main>
</div>

   </>
    );
}

export default CrearCategoria;