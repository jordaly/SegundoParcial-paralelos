
const array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const array2 = ["2", "1", "3", "6", "5", "10", "9", "7", "8", "4"];


console.log('Mi arreglo: ' + JSON.stringify(array))


const BusquedaBinaria = (array, number) => {

    let low = 0;

    let high = array.length - 1;

    while (low <= high) {

        let i = Math.floor((low + high) / 2);

        let mid = array[i];

        if (mid == String(number)) {

            return 'La numero ' + String(number) + ' ha sido encontrada en la posicion ' + i + ' del arreglo';

        }

        if (mid > String(number)) {

            high = i - 1;

        } else {

            low = i + 1;

        }

    }

    return;

}


const BusquedaBurbuja = (array2, number) => {

    var n, i;
    n = array2.length;
    for (i = 0; i < n; i++) {
        if (array2[i] == String(number)) {

            console.log('Arreglo Desorganizado: ' + JSON.stringify(array2))
            return 'La numero ' + String(number) + ' ha sido encontrada en la posicion ' + i + ' del arreglo';

        }
    }



}


let number = '';


const regex = new RegExp('[0-9]');


do {


    number = prompt('Escriba un numero del 1 al 10')


    if (regex.test(number) && (number < 11 && number > 0)) {


        console.log('Busqueda Binaria: ' + BusquedaBinaria(array, number))

        console.log('Busqueda por el Metodo Burbuja: ' + BusquedaBurbuja(array2, number))

    } else {

        alert('Debe escribir un numero del 1 al 10');
        number = ''

    }

} while (!regex.test(number) && (number < 11 && number > 0));

