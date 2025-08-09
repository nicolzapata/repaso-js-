function saludar() {
    let texto=document.getElementById('miInput').value;

    if (texto==""){
        document.getElementById('resultado').innerText="❌No se puede enviar un campo vacio";
        document.getElementById('miInput').style.background="red"
    }
    else{   
        document.getElementById('resultado').innerText=texto;
        document.getElementById('miInput').value=""

        document.getElementById('boton').style.background="#3dd";
        document.getElementById('boton').innerText="✔Funciono"
    }
}

function calcular() {
    let numero1= parseInt(document.getElementById('n1').value);
    let numero2= parseInt(document.getElementById('n2').value);

    let operacion= document.getElementById('operacion').value;

    if(operacion=="sumar") {
        document.getElementById('resultadocalculadora').innerText=numero1+numero2;
    }
    else if(operacion=="restar"){
        document.getElementById('resultadocalculadora').innerText=numero1-numero2;
    }
    else if(operacion=="multiplicar"){
        document.getElementById('resultadocalculadora').innerText=numero1*numero2;
    }
    else if(operacion=="dividir"){
        
        document.getElementById('resultadocalculadora').innerText=numero1/numero2;
    }
}
    