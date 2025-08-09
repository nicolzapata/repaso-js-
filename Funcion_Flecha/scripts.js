  //Ejercicio 1: Saludar con nombre ingresado -->
document.getElementById('miBoton').addEventListener("click", ()=>{
    let texto=document.getElementById('miInput').value;

    if (texto==""){
        document.getElementById('resultado').innerText="❌No se puede enviar un campo vacio";
        document.getElementById('miInput').style.background="red"
    }
    else{   
        document.getElementById('resultado').innerText="🥰Hola " + texto;
        document.getElementById('miInput').value=""

        document.getElementById('boton').style.background="#3dd";
        document.getElementById('boton').innerText="✔Funciono"
    }
});

 //Ejercicio 2: Sumar dos números -->

document.getElementById('botonSumar').addEventListener("click", () => {
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    let resultado = document.getElementById('resultadoSuma');

    if (num1 === "" || num2 === "") {
        resultado.textContent = "❌ Llene ambos campos";
        resultado.style.background = "red";
    } else {
        let suma = parseFloat(num1) + parseFloat(num2);

        if (isNaN(suma)) {
            resultado.textContent = "❌ Ingrese números válidos";
            resultado.style.background = "red";
        } else {
            resultado.textContent = `✅ Resultado: ${suma}`;
            resultado.style.background = "lightgreen";
        }
    }
});



 //Ejercicio 3: Calcular total de una venta -->
document.getElementById('botonCompra').addEventListener("click", ()=>{
    let producto=document.getElementById('producto').value;
    let cantidad=parseInt(document.getElementById('cantidad').value);
    let precio=parseFloat(document.getElementById('precio').value);

    if(producto=="" || cantidad==""|| precio==""){
        document.getElementById('resultado_Compra').value=" ❌Llene todos los campos";
        document.getElementById('resultado_Compra').style.background="red"
    }
    else{
        if(cantidad<1){
            document.getElementById('resultado_Compra').value=" ❌La cantida no puede ser cero";
            document.getElementById('resultado_Compra').style.background="red" 
        }
        else if(precio<1){
            document.getElementById('resultado_Compra').value=" ❌La cantida no puede ser cero";
            document.getElementById('resultado_Compra').style.background="red" 
        }
        else{
            document.getElementById('resultado_Compra').value=(cantidad*precio).toLocaleString();
        }
    }
});