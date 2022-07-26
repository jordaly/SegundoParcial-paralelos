


const array = ["1","2","3","4","5","6","7","8","9","10"];

console.log('Mi arreglo: '+JSON.stringify(array))


const BusquedaSecuencial = (array, number) => {

    for (let i = 0; i < array.length; i++) {

        if (array[i] == String(number)) {

            return 'La numero '+String(number)+' ha sido encontrada en la posicion '+i+' del arreglo';

        }

    }

}


const BusquedaPorSalto = (array, number) => {
    
    const length = array.length;

    let step = Math.floor(Math.sqrt(length));

    let i = 0;

    while (array[Math.min(step, length) - 1] < String(number)) {
        i = step;
        step += step;
        if (i >= length) {
            return;
        }
    }

    let upperBound = Math.min(step, length);

    while (array[i] < String(number)) {
        i++;
        if (i == upperBound) {
            return;
        }
    }

    if (array[i] == String(number)) {
        return 'La numero '+String(number)+' ha sido encontrada en la posicion '+i+' del arreglo';
    }

    return;

}


let number = '';


const regex = new RegExp('[0-9]');


do{
    
    
    number = prompt('Escriba un numero entre 1 y 10');

    
    if(regex.test(number) && (number<11 && number>0)){

        
        console.log('Busqueda Secuencial: '+BusquedaSecuencial(array, number));

        console.log('Busqueda Por Saltos: '+BusquedaPorSalto(array, number));

    } else {

        alert('Debe escribir un numero entre 1 y 10');
        number = '';

    }

} while(!regex.test(number) && (number<11 && number>0));

