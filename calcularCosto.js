function calcularCostoAgua(consumo) {
    let costo = 0;
  
    if (consumo <= 15) {
      costo = consumo * 500;
    } else if (consumo <= 30) {
      costo = consumo * 700;
    } else {
      costo = consumo * 1000;
    }
  
    return costo;
  }
  calcularCostoAgua ();