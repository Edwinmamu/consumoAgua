function capturarConsumo() {
    const consumos = [];
    let continuar = true;
  
    while (continuar) {
      const entrada = prompt("Ingrese el consumo de agua en m³ (o escriba 'ok' para finalizar):");
  
      // Verificar si se desea finalizar la captura
      if (entrada.toLowerCase() === 'ok') {
        continuar = false;
        break;
      }
  
      const consumo = Number(entrada); // Convertir la entrada a número
  
      // Comprobar si el consumo es un número válido y no negativo
      if (typeof consumo === 'number' && consumo >= 0) {
        consumos.push(consumo);
      } else {
        alert("Por favor, ingrese un número válido.");
      }
    }
  
    return consumos;
  }
  capturarConsumo ();
  