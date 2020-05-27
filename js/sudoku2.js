// let _board = [
//     ['.', '9', '.', '.', '4', '2', '1', '3', '6',],
//     ['.', '.', '.', '9', '6', '.', '4', '8', '5',],
//     ['.', '.', '.', '5', '8', '1', '.', '.', '.',],
//     ['.', '.', '4', '.', '.', '.', '.', '.', '.',],
//     ['5', '1', '7', '2', '.', '.', '9', '.', '.',],
//     ['6', '.', '2', '.', '.', '.', '3', '7', '.',],
//     ['1', '.', '.', '8', '.', '4', '.', '2', '.',],
//     ['7', '.', '6', '.', '.', '.', '8', '1', '.',],
//     ['3', '.', '.', '.', '9', '.', '.', '.', '.',],
// ];


var matrix = [];

for(var i = 0; i < 9; i++) {
    matrix[i] = [];
    for(var j = 0; j < 9; j++) {
        matrix[i][j] = undefined;
    }
}

var delegado = (selector) => (callback) => (event) => event.target.matches(selector) && callback(event)
var delegadoinput = delegado('input[type=number]')

const $table = document.getElementById('tablero')

$table.addEventListener('input',
    delegadoinput((event) => {
        var id = event.srcElement.id;
        var numero = event.data;
        validacion(matrix, numero, id)
        }
    )
)

function isvalid(_matrix, row, col, numero) {
    for (let i = 0; i < 9; i++) {
        let m = 3 * Math.floor(row / 3) + Math.floor(i/ 3);
        let n = 3 * Math.floor(col / 3) + i % 3;
        if (_matrix[row][i] == numero || _matrix[i][col] == numero || _matrix[m][n] == numero) {
            return false;
        }
    }
    return true;
}

function validacion (_matrix, numero, id) {
    var coordenadas = id.split("");
    var fila = coordenadas[0]
    var columna = coordenadas [1]
    let valid = isvalid(_matrix, fila, columna, numero)
    if(valid) {
        _matrix[fila][columna] = numero
        console.log('valido')
    } else if(numero == null) {
        document.getElementById(id).style.backgroundColor = "white"
    }
    else{
        console.log("fallo")
        document.getElementById(id).style.backgroundColor = "red";

    }

}



const $start = document.getElementById('start')
const $reset = document.getElementById('reset')
const $validar = document.getElementById('validar')

$start.addEventListener('click', iniciarjuego)

function iniciarjuego(){
    document.getElementById('tablero').style.display = 'block';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('validar').style.display = 'block';
    alert('Cuando hayas completado presiona el boton resultado')
    $start.style.display = 'none'
}


$reset.addEventListener('click', reiniciarJuego)

function reiniciarJuego(){
    alert('Se reinicio el juego para que puedas volver a empezar desde cero')
    location.reload();
}

$validar.addEventListener('click', win)

function win() {
    var c = 0;
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            if(matrix[i][j] == undefined){
                c++
            }
            if(c == 0){
               alert('Victory campal')
            }
        }
    }
}

