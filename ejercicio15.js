//corresponde a un mes del año devolver el nombre del mes, si no se cumple entonces  
//mostrar un mensaje que no es un mes. 
function retornarMes(numeroMes) { 
    const meses = [ 
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" 
    ]; 
    if (numeroMes >= 1 && numeroMes <= 12) { 
        return `El mes es: ${meses[numeroMes - 1]}`; 
    } else { 
       return "No es un mes válido."; 
    } 
} 
const numero = parseInt(prompt("Ingrese un número entre 1 y 12:")); 
console.log(retornarMes(numero)); 