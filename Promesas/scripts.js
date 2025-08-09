// Función que verifica si el nombre ingresado es válido usando una promesa
const verificarNombre = (nombre) => {
    // Retorna una nueva promesa que puede ser exitosa o error
    return new Promise((exito, error) => {

        // Simula un proceso que tarda 2 segundos (2000 milisegundos)
        setTimeout(() => {
            // Si el nombre no está vacío (luego de quitar espacios con trim)
            if (nombre.trim() !== "") {
                // Se resuelve la promesa con un mensaje de éxito
                exito("✅ Nombre válido: " + nombre);
            } else {
                // Si está vacío, se rechaza la promesa con un mensaje de error
                error("❌ El nombre no puede estar vacío");
            }
        }, 2000); // Tiempo de espera de 2 segundos
    });
}

// Función que se ejecuta cuando el usuario hace clic en el botón "Validar"
const validarNombre = () => {
    // Captura el valor del input con id="nombre"
    const nombreIngresado = document.getElementById("nombre").value;

    // Muestra mensaje de que se está validando
    document.getElementById("mensaje").innerText = "Validando...";

    // Llama a la función que retorna una promesa
    verificarNombre(nombreIngresado)
        // Si la promesa se resuelve correctamente (nombre válido)
        .then(mensaje => {
            document.getElementById("mensaje").innerText = mensaje;
        })
        // Si la promesa es rechazada (nombre vacío)
        .catch(error => {
            document.getElementById("mensaje").innerText = error;
        });
}

// ------------------ FUNCIÓN DE SUMA CON PROMESA ------------------
// Función que se llama al hacer clic en el botón de "Sumar"
// Captura los valores del input, los valida y llama a una promesa
function sumar() {
    const n1 = parseFloat(document.getElementById("n1").value); // Convertir el primer valor a número decimal
    const n2 = parseFloat(document.getElementById("n2").value); // Convertir el segundo valor a número decimal
    const resultado = document.getElementById("resultadoSuma"); // Elemento donde se mostrará el resultado

    resultado.innerText = "Calculando..."; // Mensaje provisional mientras se resuelve la promesa

    // Llamamos la promesa con los dos valores
    sumarConPromesa(n1, n2)
        .then(suma => {
            // Si la promesa se resuelve correctamente
            resultado.innerText = `Resultado: ${suma}`;
        })
        .catch(error => {
            // Si la promesa se rechaza por error
            resultado.innerText = error;
        });
}

function verificarMayorEdad(edad) {
  return new Promise((resolve, reject) => {
    // Simular retardo de 1.5 segundos
    setTimeout(() => {
      if (isNaN(edad) || edad <= 0) {
        reject("❌ Por favor ingresa una edad válida.");
      } else if (edad >= 18) {
        resolve("✅ Eres mayor de edad.");
      } else {
        resolve("⚠️ Eres menor de edad.");
      }
    }, 1500);
  });
}

document.getElementById("btnVerificar").addEventListener("click", () => {
  const edad = parseInt(document.getElementById("edadInput").value);
  const resultado = document.getElementById("resultadoEdad");

  resultado.textContent = "Verificando... ⏳";
  resultado.style.color = "#333";

  verificarMayorEdad(edad)
    .then(mensaje => {
      resultado.textContent = mensaje;
      resultado.style.color = "green";
    })
    .catch(error => {
      resultado.textContent = error;
      resultado.style.color = "red";
    });
});


// Función que retorna una promesa para realizar la suma de dos números
// Simula un proceso asincrónico con un delay de 1 segundo
const sumarConPromesa = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Validación: si alguno de los valores no es número, rechazamos la promesa
            if (isNaN(a) || isNaN(b)) {
                reject("Error: Ambos valores deben ser números.");
            } else {
                resolve(a + b); // Si son válidos, resolvemos con la suma
            }
        }, 1000); // Simulamos espera de 1 segundo
    });
}


// ------------------ CONSUMO DE API CON PROMESA ------------------

// Obtenemos referencias a los elementos del DOM
const btn = document.getElementById("btnCargar");   // Botón para cargar los datos
const lista = document.getElementById("listaUsuarios"); // Lista donde se mostrarán los usuarios

// Función que consulta una API externa usando fetch (que retorna una promesa)
const obtenerUsuarios = () => {
    fetch("https://jsonplaceholder.typicode.com/users") // Llamado a la API
        .then(respuesta => {
            // Verificamos si la respuesta fue exitosa
            if (!respuesta.ok) throw new Error("Error al consultar la API");
            return respuesta.json(); // Convertimos la respuesta a JSON
        })
        .then(usuarios => {
            // Si todo va bien, mostramos los usuarios en pantalla
            lista.innerHTML = ""; // Limpiamos la lista antes de mostrar

            // Recorremos cada usuario recibido y lo agregamos a la lista
            usuarios.forEach(usuario => {
                const li = document.createElement("li");
                li.textContent = `👤 ${usuario.name} | 📧 ${usuario.email} | 🌍 ${usuario.address.city}`;
                lista.appendChild(li);
            });
        })
        .catch(error => {
            // En caso de error (por conexión o datos), mostramos un mensaje en rojo
            lista.innerHTML = `<li style="color:red;">${error.message}</li>`;
        });
};

// Evento: cuando se hace clic en el botón, se llama a la función obtenerUsuarios
btn.addEventListener("click", obtenerUsuarios);
