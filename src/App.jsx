import './App.css';

function Saludo() {
  return (
    <div>
      <h1>Bienvenido a la clase de consulta</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolores a voluptate, nobis praesentium nihil. Unde debitis nostrum ratione distinctio dolore quisquam, dolor at illum, corrupti, incidunt similique aperiam sint?</p>
    </div>
  )
}

/* function contador() {
  let i = 0
} */

function Botones() {
  const estilos = {color:'red'}

  return (
  <button style={estilos}>Boton 1</button>
  )
}

function App() {

  return (
    <>
      <h1>
        Hola Rodri
      </h1>
      <Saludo/>
      <Botones/>
      <Saludo/>
      <Botones/>
    </>
  )
}

export default App
