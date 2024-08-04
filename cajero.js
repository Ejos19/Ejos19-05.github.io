// Función constructora para crear un objeto Cliente
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
   }
   // Crear un objeto para almacenar los clientes
   let clientes = {};
   // Función para depositar dinero
   function depositar() {
    const nombreInput = document.getElementById("nombre");
    const montoInput = document.getElementById("monto");
    const nombre = nombreInput.value;
    const monto = parseInt(montoInput.value);
    if (!clientes[nombre]) {
    clientes[nombre] = new Cliente(nombre, 2000); // Crear un nuevo cliente si no existe
    }
    clientes[nombre].saldo += monto; // Depositar monto en el saldo actual
    mostrarResultado(
    `Depósito de ${monto} realizado con éxito. Saldo actual: ${clientes[nombre].saldo}`
    );
   }
   // Función para retirar dinero
   function retirar() {
    const nombreInput = document.getElementById("nombre");
    const montoInput = document.getElementById("monto");
    const nombre = nombreInput.value;
    const monto = parseInt(montoInput.value);
    if (clientes[nombre]) {
    if (clientes[nombre].saldo >= monto) {
    clientes[nombre].saldo -= monto; // Retirar monto del saldo actual
    mostrarResultado(
    `Retiro de ${monto} realizado con éxito. Saldo actual: ${clientes[nombre].saldo}`
    );
    } else {
    mostrarResultado("No tiene suficiente saldo para realizar el retiro.");
    }
    } else {
    mostrarResultado("Cliente no encontrado.");
    }
   }
   // Función para consultar saldo
   function consultarSaldo() {
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value;
    if (clientes[nombre]) {
    mostrarResultado(`Saldo actual de ${nombre}: ${clientes[nombre].saldo}`);
    } else {
    mostrarResultado("Cliente no encontrado.");
    }
   }
   // Función para mostrar el resultado en pantalla
   function mostrarResultado(texto) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML += texto + "<br>";
   }