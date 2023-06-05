/*SIMULADOR INTERACTIVO*/
/*La idea de mi Pre Entrega seria de mostrar un X persona entrando a una pagina para comprar equipos y contar el IVA al final y ver si no se fue de la mano com la compra.*/

alert("Bienvenidos/as a mi trabajo de la 1°er pre entrega, para seguir por favor hacer los siguientes pasos:")
let nombre = (prompt("Ingrese tu Nombre"))
let apellido = (prompt("Ingrese tu Apellido"))
nombreCompleto = nombre + " " + apellido
alert("Bienvenido/a: " + nombreCompleto)
let mensaje = "Que es lo que buscas: \n1. Celulares \n2. TVs \n3. Muebles \n4. Autos \n5. Cuadros \n6. Viajes \n7. Plantas \n8. Pinturas \n9. Accesorios \n0. Salir"
let i
//FUCTION
function multiplicar(a, b) {
    let totalCosto = a * b
    alert("El total a pagar son: " + totalCosto + " de pesos")
}
//DO WHILE
do {
    alert("Ingresaste a la tienda")
    i = Number(prompt(mensaje))
    //SWITCH
    switch (i >= 1 || i <= 9) {
        case (i === 1):
            alert("Buscaste -Celulares- que tienen un precio de 150000")
            break
        case (i === 2):
            alert("Buscaste -TVs- que tienen un precio de 16000")
            break
        case (i === 3):
            alert("Buscaste -Muebles- que tienen un precio de 8000")
            break
        case (i === 4):
            alert("Buscaste -Autos- que tienen un precio de 500000")
            break
        case (i === 5):
            alert("Buscaste -Cuadros- que tienen un precio de 1000")
            break
        case (i === 6):
            alert("Buscaste -Viajes- que tienen un precio de 90000")
            break
        case (i === 7):
            alert("Buscaste -Plantas- que tienen un precio de 5000")
            break
        case (i === 8):
            alert("Buscaste -Pinturas- que tienen un precio de 2500")
            break
        case (i === 9):
            alert("Buscaste -Accesorios- que tienen un precio de 1500")
            break
        default:
            alert("No encontraste nada de tu interes, pero sabiendo que para que me salga bien esta actividad, tienes que comprar algo si o si.")
            break
    }
}
while (i === 0)
alert("Saliste de la tienda y ahora lo vamos multiplicar con el IVA para ver cuando va a doler.")
num1 = prompt("Poner el precio del producto comprado")
num2 = 1.75
//IVA
multiplicar(num1, num2)

let hambre = (prompt("Ingrese el monto de la compra para ver si comes este mes:"))
//IF
if (hambre > 0 && hambre < 25000) {
    alert("Final Bueno: podes comer este mes")
}
else if (hambre > 25001 && hambre < 99999){
    alert("Final Nuetro: no podes comer este mes")
}
else{
    alert("Final Malo: te moriste de hambre")
}

alert("Colorin colorado, este cuento se a acabado")