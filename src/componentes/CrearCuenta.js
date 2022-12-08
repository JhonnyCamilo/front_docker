import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import crud from '../utils/crud';

const CrearCuenta = () => {
      //poder redireccionar de un componente a otro
      const navigate = useNavigate();

  const [usuario, setUsuario] = useState({ // useState inicializa las variables y solo setUsuario lo puede cambiar
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
});
const { nombre, email, password, confirmar } = usuario;

const onChange = (e) => {//la e representa el contenido de la caja de texto 
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })
}
const crearCuenta = async () => {
   // Los 2 passwords son iguales
   if (password !== confirmar) {
    console.log('diferentes');
    const mensaje = "Las contraseñas son diferentes.";
    swal({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        buttons: {
            confirm: {
                text: 'Ok',
                value: true,
                visible: true,
                className: 'btn btn-danger',
                closeModal: true
            }
        }
    });
  }else{
  
  const data = {
    nombre: usuario.nombre,
    email: usuario.email,
    password: usuario.password
  }
  console.log(data);
  const response = await crud.POST(`/api/usuarios`, data);
            const mensaje = response.msg;
            if (mensaje === 'El usuario ya existe') {
              const mensaje = "El usuario ya existe.";
              swal({
                  title: 'Error',
                  text: mensaje,
                  icon: 'error',
                  buttons: {
                      confirm: {
                          text: 'Ok',
                          value: true,
                          visible: true,
                          className: 'btn btn-danger',
                          closeModal: true
                      }
                  }
              });
          }   else {
            const mensaje = "El usuario fue creado correctamente.";
            swal({
                title: 'Información',
                text: mensaje,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });

            setUsuario({
                nombre: '',
                email: '',
                password: '',
                confirmar: ''
            }) 
             
             //redireccionamos nuevamente a la pagina de login
             navigate("/login");

          }

        }

}
const onSubmit = (e) => {//onsumit Este evento se encarga de ejecutar un determinado código de javascript al realizarse el envío de un formulario
 e.preventDefault();// no recarga la pagina
  crearCuenta();
}
  return (
      <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
      <div className='md:w-2/3 lg:w-2/5'>
      <h1 className="inline bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
         G12 Iniciar sesión Ecommerce
       </h1>
       <form 
       onSubmit={onSubmit}
       className="my-10 bg-white shadow rounded-lg p-10">
         <div className="my-5">
           
         <label className="uppercase text-gray-600 block text-lx font-bold">Nombre</label>
           <input 
           type="npmbre"
           id="nombre"
          name="nombre"
           placeholder="Ingrese su nombre"
           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
           value={nombre}
           onChange={onChange}
           />
           <label className="uppercase text-gray-600 block text-lx font-bold">Email</label>
           <input 
           type="email"
           id="email"
           name="email"
           placeholder="Email de Registro"
           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
           value={email}
           onChange={onChange}
           />
   
          
           
           <label className="uppercase text-gray-600 block text-lx font-bold">Password</label>
           <input 
           type="password"
           id="password"
           name="password"
           placeholder="Password de Registro"
           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
           value={password}
           onChange={onChange}
           />
           
           <label className="uppercase text-gray-600 block text-lx font-bold">Confirme su Password</label>
           <input 
           type="confirmar"
           id="confirmar"
           name="confirmar"
           placeholder="Confirmación Password"
           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
           value={confirmar}
           onChange={onChange}
           />
         </div>
         <input 
             type="submit"
             value="Registar Usuario"
             className="bg-violet-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-violet-300 transition-colors"
               />
   
         <Link
           className="block text-center my-5 "
         to={"/"}
         >
           Regresar
         </Link>
     </form>
   
      </div>
       
      </main>
    )

}

export default CrearCuenta;