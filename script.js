
// funcion de agregrar valores
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

// funcion de borrar
function borrar(){
    document.getElementById('pantalla').value = ''
}

// funcion calcular
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value 
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}