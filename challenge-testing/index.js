class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(producto) {
    this.carrito.push(producto);
  }
  calcularTotal() {
    let precioTotal = 0;
    this.carrito.forEach((producto) => (precioTotal += producto.price));
    return precioTotal;
  }
  aplicarDescuento(porcentaje) {
    return this.calcularTotal() * (1 - porcentaje / 100);
  }
}

module.exports = CarritoCompra;
