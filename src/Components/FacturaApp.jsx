import { useState, useEffect, useCallback } from "react";
import { ServiceFactura, calcularTotal } from "../Services/ServiceFactura";
import { FacturaDetalle } from "./FacturaDetalle";
import { CompaniaView } from "./CompaniaView";
import { ClienteView } from "./ClienteView";
import { FacturaItemsView } from "./FacturaItemsView";
import { TotalView } from "./TotalView";
import {
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Button,
} from "react-bootstrap";

export const FacturaApp = () => {
  // Estados iniciales
  const [facturaData, setFacturaData] = useState(null);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState({
    descripcion: "",
    cantidad: "",
    precio: "",
  });

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

  // Actualizar el total cuando cambian los productos
  useEffect(() => {
    setTotal(calcularTotal(items));
  }, [items]);

  // Manejo de cambios en los inputs
  const handleImputCambio = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  // Agregar un nuevo producto
  const handleAgregarProducto = (e) => {
    e.preventDefault();

    if (!form.descripcion || form.cantidad <= 0 || form.precio <= 0) {
      alert("Por favor completa todos los campos con valores válidos.");
      return;
    }

    const nuevoId = count + 1;
    setCount(nuevoId);

    const nuevoProducto = {
      id: nuevoId,
      descripcion: form.descripcion,
      cantidad: parseInt(form.cantidad, 10),
      precio: parseFloat(form.precio),
    };
    setItems([...items, nuevoProducto]);
    setForm({ descripcion: "", cantidad: "", precio: "" });
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
          <Form onSubmit={handleAgregarProducto}>
            <Form.Group>
              <Form.Label>Producto</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                placeholder="Descripción"
                value={form.descripcion}
                onChange={handleImputCambio}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                name="cantidad"
                placeholder="Cantidad"
                value={form.cantidad}
                onChange={handleImputCambio}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                placeholder="Precio"
                value={form.precio}
                onChange={handleImputCambio}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">
              Agregar Producto
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
