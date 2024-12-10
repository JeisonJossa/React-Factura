import { useState, useCallback } from "react";
import { ServiceFactura } from "../Services/ServiceFactura";
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
  // Desestructuración de datos del servicio
  const { id, nombre, fecha, cliente, compania, productos, total } =
    ServiceFactura();

  // useState para manejar los estados de los componentes
  const [items, setItems] = useState(productos || []);
  
  const [count, setCount] = useState(
    productos.length > 0 ? Math.max(...productos.map((p) => p.id)) : 1
  );
  const [totalSubmit, setTotalSubmit] = useState(total || 0);
  const [form, setForm] = useState({
    descripcion: "",
    cantidad: "",
    precio: "",
  });

  // Manejo de cambios en los imputs
  // se usa useCallback porque es una función que se renderiza constantemente
  const handleImputCambio = useCallback(
    (e) => {
      //e.target, se usa para acceder a los datos del imput
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  // handle(manejador) para validar el formulario y agregar un nuevo producto
  const handleAgregarProducto = (e) => {
    e.preventDefault();

    // Validar los campos del formulario
    if (!form.descripcion || form.cantidad <= 0 || form.precio <= 0) {
      alert("Por favor completa todos los campos con valores válidos.");
      return;
    }
    // Calcular el nuevo ID
    const nuevoId = count + 1;
    setCount(nuevoId);

    // Crear un nuevo producto y actualizar el estado
    const nuevoProducto = {
      id: nuevoId,
      descripcion: form.descripcion,
      cantidad: parseInt(form.cantidad, 10),
      precio: parseFloat(form.precio),
    };
    setItems([...items, nuevoProducto]);

    // Calcular el nuevo total
    setTotalSubmit(totalSubmit + nuevoProducto.precio * nuevoProducto.cantidad);

    // Limpiar el formulario
    setForm({ descripcion: "", cantidad: "", precio: "" });
  };

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
          <TotalView total={totalSubmit} />

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
