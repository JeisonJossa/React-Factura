import { useState, useEffect } from "react";
import { ServiceFactura, calcularTotal } from "../Services/ServiceFactura";
import { FacturaDetalle } from "./FacturaDetalle";
import { CompaniaView } from "./CompaniaView";
import { ClienteView } from "./ClienteView";
import { FacturaItemsView } from "./FacturaItemsView";
import { TotalView } from "./TotalView";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { FormuItemsFactura } from "./FormuItemsFactura";
import { use } from "react";

export const FacturaApp = () => {
  // Estados iniciales
  const [activeForm, setActiveForm] = useState(false);
  const [facturaData, setFacturaData] = useState(null);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  // Cargar los datos iniciales de la factura al montar el componente
  useEffect(() => {
    const factura = ServiceFactura();
    // Cargar los datos de la factura
    setFacturaData(factura);
    setItems(factura.productos || []);
    setCount(
      factura.productos.length > 0
        ? Math.max(...factura.productos.map((p) => p.id))
        : 0
    );
    setTotal(calcularTotal(factura.productos));
  }, []); // Dependencias vacías: se ejecuta solo al montar el componente

  useEffect(() => {
    setTotal(calcularTotal(items));
  }, [items]);

  const handleAgregarProducto = ({ descripcion, cantidad, precio }) => {
    const nuevoId = count + 1;
    setCount(nuevoId);

    const nuevoProducto = {
      id: nuevoId,
      descripcion: descripcion,
      cantidad: parseInt(cantidad, 10),
      precio: parseFloat(precio),
    };
    setItems([...items, nuevoProducto]);
  };

  if (!facturaData) {
    return <div>Cargando...</div>; // Mostrar un mensaje mientras se cargan los datos
  }

  const { id, nombre, fecha, cliente, compania } = facturaData;

  return (
    <Container>
      <Card style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
        <Card.Header>Ejemplo Facturación</Card.Header>
        <Card.Body>
          <h2>Compañía</h2>
          <ListGroup>
            <CompaniaView {...compania} />
          </ListGroup>

          <Row>
            <Col>
              <h2>Factura</h2>
              <FacturaDetalle id={id} nombre={nombre} fecha={fecha} />
            </Col>

            <Col>
              <h2>Cliente</h2>
              <ListGroup>
                <ClienteView {...cliente} />
              </ListGroup>
            </Col>
          </Row>

          <h2>Productos</h2>
          <FacturaItemsView productos={items} />
          <TotalView total={total} />

          {/* Formulario para agregar productos */}
          <h3>Agregar Producto</h3>
          <Button onClick={() => setActiveForm(!activeForm)}>
            {!activeForm ? "Agregar Item" : "Cerrar Formulario"}
          </Button>
          {!activeForm || <FormuItemsFactura handler={handleAgregarProducto} />}
        </Card.Body>
      </Card>
    </Container>
  );
};
