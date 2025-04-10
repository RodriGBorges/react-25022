import React from 'react';

function Parraf() {
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum aliquam vitae aperiam ratione eligendi nisi voluptatibus iste, iure rerum nesciunt, suscipit ipsum iusto. Animi aut ipsa eaque nihil quae.</p>
    )
}

function Saludo() {

    //console.log(props);
    //const { nombre } = props


    return (
        <div>
            <h1>Bienvenido a la clase de consulta</h1>
            <Parraf />
        </div>
    )
}

export default Saludo