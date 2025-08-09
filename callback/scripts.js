
// crear funcion flecha const nombre]_funcion=() =>{}

const calcular = () =>{

    //declarar variable

    let cantidad=parseInt(document.getElementById('cantidad').value);
    let precio=parseInt(document.getElementById('precio').value);
    let producto= document.getElementById('producto').value;

    //validaciones
    if(isNaN(cantidad) || isNaN(precio) || producto=='') {
        alert("Llene todos los campos")
    }
    else{
        //crear variables de calculos
        let subtotal= cantidad*precio;
        let iva= subtotal*0.19;
        let total=(subtotal+iva).toLocaleString();


        document.getElementById('iva').value=iva.toLocaleString();
        document.getElementById('total').value=total;
    }
}

//se usa callback llamar una duncion dentro de un evento

document.getElementById('calcular').addEventListener("click", calcular);


//calcular edad

const calcular_edad = () => {
    const input = document.getElementById('ano');
    const parrafoEdad = document.querySelector('p');
    const anoNacimiento = input.value;

    if (anoNacimiento === '') {
        parrafoEdad.textContent = 'Por favor ingresa un año de nacimiento.';
        return;
    }

    const anoActual = new Date().getFullYear();
    const edad = anoActual - parseInt(anoNacimiento);

    parrafoEdad.textContent =
        edad < 0
        ? 'El año ingresado no es válido.'
        : `Edad: ${edad} años`;
};

// Asignar el evento al botón
document.getElementById('edad').addEventListener('click', calcular_edad);
