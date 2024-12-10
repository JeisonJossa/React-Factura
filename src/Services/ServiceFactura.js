import { DataFactura } from "../Data/DataFactura";

export const ServiceFactura = () => {
  
  const total = calcularTotal(DataFactura.productos);
  return { ...DataFactura, total };
};

export const calcularTotal=(productos)=>{
  const total = productos.reduce(
    (acc, item) => acc + (item.precio * item.cantidad),0
  );
  return total;
}