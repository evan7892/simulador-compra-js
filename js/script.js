let nombreUsuario = prompt("Ingresa tu nombre")

alert("Bienvenido/a "+nombreUsuario+" es un gusto atenderte en Élite Gaming")

alert("De la siguiente lista de perifericos indique cuantos quiere de cada uno")

let productoA = parseInt(prompt("Microfono Hyperx Quadcast, costo $170"))

let productoB = parseInt(prompt("Mouse Logitech G203, costo $80 "))

let productoC = parseFloat(prompt("Webcam Logitech brio 4k, costo $200 "))

let productoD = parseFloat(prompt("Teclado mécanico generico, costo $20 "))

let nuevaCantidad = 0

function costoTotal() {

    let precioA = productoA * 170
    let precioB = productoB * 80
    let precioC = productoC * 200
    let precioD = productoD * 20

    let precioTotal = precioA + precioB + precioC + precioD

    return precioTotal
}

function agregar(producto2) {

    switch (producto2) {
        case '1':
            alert("Cuántos microfono Hyper x QuadCast quiere agregar?")
            nuevaCantidad = parseInt(prompt("ingrese una cantidad por favor"))
            productoA = productoA + nuevaCantidad
            break
        case '2':
            alert("Cuántos Mouse logitech G203 quiere agregar?")
            nuevaCantidad = parseInt(prompt("ingrese una cantidad por favor"))
            productoB = productoB + nuevaCantidad
            break
        case '3':
            alert("Cuántas Logitech Brio 4k quiere agregar?")
            nuevaCantidad = parseInt(prompt("ingrese una cantidad por favor"))
            productoC = productoC + nuevaCantidad
            break
        case '4':
            alert("Cuántos Teclados genericos quiere agregar?")
            nuevaCantidad = parseInt(prompt("ingrese una cantidad por favor"))
            productoD = productoD + nuevaCantidad
            break
    }
}

function quitar(opcion2) {

    let control = 0

    switch (opcion2) {
        case '1':
            if (productoA == 0) {
                alert("No se puede sacar ninguna cantidad debido a que usted no posee nada de este producto")
                break
            }
            alert(`Usted tiene una cantidad de ${productoA} del producto seleccionado, cuantas desea sacar`)
            newCantidad = parseInt(prompt("ingrese cantidad"))
            control = productoA
            productoA = productoA - newCantidad
            while (productoA <= -1) {
                alert(`No puede quitar a cantidad ingresada, no se puede sacar más de ${control}`)
                productoA = control
                newCantidad = parseInt(prompt("por favor vuelva a ingresar la canditdad que desea sacar"))
                productoA = productoA - newCantidad
            }
            break
        case '2':
            if (productoB == 0) {
                alert("No se puede sacar ninguna cantidad debido a que usted no posee nada de este producto")
                break
            }
            alert(`Usted tiene una cantidad de ${productoB} del producto seleccionado, cuantas desea sacar`)
            newCantidad = parseInt(prompt("ingrese cantidad"))
            control = productoB
            productoA = productoB - newCantidad
            while (productoB <= -1) {
                alert(`No puede quitar a cantidad ingresada, no se puede sacar más de ${control}`)
                productoB = control
                newCantidad = parseInt(prompt("por favor vuelva a ingresar la canditdad que desea sacar"))
                productoB = productoB - newCantidad
            }
            break
        case '3':
            if (productoC == 0) {
                alert("No se puede sacar ninguna cantidad debido a que usted no posee nada de este producto")
                break
            }
            alert(`Usted tiene una cantidad de ${productoC} del producto seleccionado, cuantas desea sacar`)
            newCantidad = parseInt(prompt("ingrese cantidad"))
            control = productoC
            productoC = productoC - newCantidad
            while (productoC <= -1) {
                alert(`No puede quitar a cantidad ingresada, no se puede sacar más de ${control}`)
                productoC = control
                newCantidad = parseInt(prompt("por favor vuelva a ingresar la cantidad que desea sacar"))
                productoC = productoC - newCantidad
            }
            break
        case '4':
            if (productoD == 0) {
                alert("No se puede sacar ninguna cantidad debido a que usted no posee nada de este producto")
                break
            }
            alert(`Usted tiene una cantidad de ${productoD} del producto seleccionado, cuantas desea sacar`)
            newCantidad = parseInt(prompt("ingrese cantidad"))
            control = productoD
            productoD = productoD - newCantidad
            while (productoD <= -1) {
                alert(`No puede quitar a cantidad ingresada, no se puede sacar más de ${control}`)
                productoD = control
                newCantidad = parseInt(prompt("por favor vuelva a ingresar la cantidad que desea sacar"))
                productoD = productoD - newCantidad
            }
            break
        default:
            alert("Por favor ingrese una opción correcta")
            break
    }
}

alert("Si desea finalizar su compra y calcular el costo total elija la opcion 1\nSi desea agregar más productos elija la opción 2\nSi desea eliminar algún producto elija la opción 3")

let opcion = (prompt("Escriba Opción 1, 2 o 3"))

while(opcion != '1' && opcion != '2' && opcion != '3'){
    opcion = prompt("Elija una opcion opción correcta:\n-1\n-2\n-3")
}

switch (opcion) {

    case '1':
        const mostrarPrecio = costoTotal()
        alert(`El precio total es de $${mostrarPrecio}`)
        console.log(mostrarPrecio)
        break

    case '2':
        alert("Que producto desea agregar")
        let opcion2 = prompt("Elija una opcion\n1- Microfono \n2- Mouse\n3- WebCam\n4- Teclado")
        while(opcion2 != '1' && opcion2 != '2' && opcion2 != '3' && opcion2 != '4'){
            opcion2 = prompt("Elija una opcion opción correcta:\n1- Microfono \n2- Mouse\n3- WebCam\n4- Teclado")
        }
        agregar(opcion2)
        const mostrarPrecioDos = costoTotal()
        alert(`El precio total es de $${mostrarPrecioDos}`)
        console.log(mostrarPrecioDos)
        break

    case '3':
        alert("Que producto desea quitar")
        let opcion3 = (prompt("Elija una opcion\n1- Microfono \n2- Mouse\n3- WebCam\n4- Teclado"))
        while(opcion3 != '1' && opcion3 != '2' && opcion3 != '3' && opcion3 != '4'){
            opcion3 = prompt("Elija una opcion opción correcta:\n1- Microfono \n2- Mouse\n3- WebCam\n4- Teclado")
        }
        quitar(opcion3)
        const mostrarPrecioTres = costoTotal()
        alert(`El precio total es de $${mostrarPrecioTres}`)
        console.log(mostrarPrecioTres)
        break

    default:
        alert("Por favor ingrese una opción correcta")
        break

}