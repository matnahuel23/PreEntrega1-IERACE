let Catalogo = "1- AUTO, 2- AVION, 3- BARCO, 4- BICICLETA";
let Pagos = "1- Efectivo con 15% de descuento 2- 6 Cuotas con 25% de Int 3- 12 Cuotas con 75% de Int";

let auto = 10;   
let avion = 20; 
let barco = 30; 
let bici = 40;  

let efectivo = 0.85;
let cuota6 = 1.25;
let cuota12 = 1.75;

function caja (){
        let seleccion = true;
        let total = 0;
        while (seleccion){
            let prod = Number (prompt (`Ingrese numero de producto entre: ${Catalogo}`));
            let cantidad =  Number (prompt("Ingrese la cantidad que desea llevar de este Producto"));
            switch (prod){
                    case 1:
                        total = total + cantidad * auto;
                        break;
                    case 2:
                        total = total + cantidad * avion;
                        break;
                    case 3:
                        total = total + cantidad * barco;
                        break;
                    case 4:
                        total = total + cantidad * bici;
                        break;
            }
            let seguir = prompt ("Presione 0 si quiere finalizar compra");
            if (seguir == 0){
                seleccion = false;
            }
        }
        return total
}

function pago (importe){
    seleccion = true;
    while (seleccion){
    let medio = Number (prompt (`Ingrese el medio de pago que desea realizar ${Pagos}`));
    switch (medio){
        case 1:
            return  importe * efectivo
        case 2:
            return  importe * cuota6
        case 3:
            return  importe * cuota12
    }
    alert (`Error en la seleccion`);
    }
}

alert ("Jugueteria")
let total = caja ();
let pagar = pago (total);
let mensaje = `La facturacion total es de: ${pagar}`;
alert (mensaje);