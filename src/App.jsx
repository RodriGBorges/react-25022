import './App.css';
import Botones from './components/Botones';
import ListaProductos from './components/ListaDeUsuarios';
import Saludo from './components/Saludo';

/* function Saludo() {
  return (
    <div>
      <h1>Bienvenido a la clase de consulta</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolores a voluptate, nobis praesentium nihil. Unde debitis nostrum ratione distinctio dolore quisquam, dolor at illum, corrupti, incidunt similique aperiam sint?</p>
    </div>
  )
} */

/* function contador() {
  let i = 0
} 
  
Imperativo = Instrucciones explicitas, paso a paso
Declarativo = Especifico el resultado deseado, sin ir paso a paso
*/

/* function Botones() {
  const estilos = {color:'red'}

  return (
  <button style={estilos}>Boton 1</button>
  )
} */

function App() {

  let productos = ['producto1', 'producto2', 'producto3', 'producto4']

  return (
    <>
      <h1>
        Hola Rodri
      </h1>
      <Saludo name='Rodri' />
      <Botones texto='Aceptar' color='green'/>
      <Saludo/>
      <Botones texto='Cancelar' color='red'/>
      <ListaProductos productos = {productos} />
    </>
  )
}

export default App
