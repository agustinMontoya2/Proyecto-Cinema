const CarritoCompra = require("../index");

describe("probando que la clase funcione bien", () => {
  const producto = { name: "producto A", price: 100 };
  const producto2 = { name: "producto A", price: 200 };
  let carritoProductos;

  beforeEach(() => {
    carritoProductos = new CarritoCompra();
  });
  it("El carrito empieza vacio", () => {
    expect(carritoProductos.carrito.length).toBe(0);
  });
  it("Recibe correctamente un producto", () => {
    carritoProductos.agregarProducto(producto);
    expect(carritoProductos.carrito).toContain(producto);
  });
  it("Calcula correctamente el total un producto", () => {
    carritoProductos.agregarProducto(producto);
    carritoProductos.agregarProducto(producto2);
    const total = carritoProductos.calcularTotal();
    expect(total).toBe(300);
  });
  it("aplica correctamente el total un descuento", () => {
    carritoProductos.agregarProducto(producto2);
    const total = carritoProductos.aplicarDescuento(10);
    expect(total).toBe(180);
  });
});
