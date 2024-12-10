import { DataFactura } from "../Data/DataFactura";

export const ServiceFactura = () => {
  // Una manera de calcular el total es con foreach
  // let total = 0;
  // DataFactura.productos.forEach((item) => (total += item.precio * item.cantidad));
  // otra manera de calcular el total es con reduce
   const total = DataFactura.productos.reduce(
     (acc, item) => acc + (item.precio * item.cantidad),0
   );
  return { ...DataFactura, total };
};
