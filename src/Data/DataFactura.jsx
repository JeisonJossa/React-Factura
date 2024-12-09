export const DataFactura = {
  id: 1,
  nombre: "Factura 1",
  fecha: "2021-01-01",
  cliente: {
    nombre: "Cliente 1",
    apellido: "Apellido 1",
    identificacion: "111111111",
    direccion: "Direccion 1",
    ciudad: "Ciudad 1",
    pais: "Pais 1",
    telefono: "123456789",
    email: "Y7o5d@example.com",
  },
  compania: {
    nombre: "Compania 1",
    identificacion: "111111111",
    direccion: "Direccion 1",
    ciudad: "Ciudad 1",
    pais: "Pais 1",
    telefono: "123456789",
    email: "Y7o5d@example.com",
  },
  productos: [
    {
      id: 1,
      descripcion: "Producto 1",
      cantidad: 1,
      precio: 100,
    },
    {
      id: 2,
      descripcion: "Producto 2",
      cantidad: 2,
      precio: 200,
    },
  ],
  total: 300,
};
