import { ServiceFactura } from "../Services/ServiceFactura";
import { FacturaDetalle } from "./FacturaDetalle";
import { CompaniaView } from "./CompaniaView";
import { ClienteView } from "./ClienteView";
import { FacturaItemsView } from "./FacturaItemsView";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";


export const FacturaApp = () => {
  // DESESTRUCTURACION DE OBJETOS
  const { id, nombre, fecha, cliente, compania, productos } = ServiceFactura();

  return (
    <>
      <Container>
        <Card
          style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
        >
          <Card.Header>Ejemplo Facturacion</Card.Header>
          <Card.Body>
            <h2>Compañia</h2>
            <ListGroup>
              <CompaniaView
                //con el operador spread se pasan todas las propiedades
                {...compania}
              />
            </ListGroup>

            <Row>
              <Col>
                <h2>Factura</h2>
                <FacturaDetalle id={id} nombre={nombre} fecha={fecha} />
              </Col>

              <Col>
                <h2>Cliente</h2>
                <ListGroup>
                  <ClienteView
                    //con el operador spread se pasan todas las propiedades
                    {...cliente}
                  />
                </ListGroup>
              </Col>
            </Row>

            <h2>Productos</h2>
            {/* tambien se le puede pasar como props asignando directamente */}
            <FacturaItemsView productos={productos} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
