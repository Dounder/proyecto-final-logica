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

function isvalid(_matrix, row, col, k) {
    for (let i = 0; i < 9; i++) {

        let m = 3 * Math.floor(row / 3) + Math.floor(i/ 3);
        let n = 3 * Math.floor(col / 3) + i % 3;
        if (_matrix[row][i] == k || _matrix[i][col] == k || _matrix[m][n] == k) {
            return false;
        }
    }
    return true;
}

function validacion (_matrix, row, col, numero) {
    let valid = isvalid(_matrix, row, col, numero)
    if(valid) {
        _matrix[row][col] = numero

    } else{

        console.log("fallo")
    }
}

var matrix = [];
for(var i = 0; i < 9; i++) {
    matrix[i] = [];
    for(var j = 0; j < 9; j++) {
        matrix[i][j] = undefined;
    }
}

const $start = document.getElementById('start')
const $reset = document.getElementById('reset')

function onclickstart ($start){
    $start.addEventListener('click', iniciarjuego)
}


function iniciarjuego(){
    alert('juego se va inicializar')
    console.log('hola')
}



onclickstart($start)

// Sacar el valor de las filas y las columnas
// cambiar css con javascript
