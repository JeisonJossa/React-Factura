import { ListGroup } from "react-bootstrap";
export const FacturaDetalle = ({ id, nombre, fecha }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>Id: {id}</ListGroup.Item>
        <ListGroup.Item>Nombre: {nombre}</ListGroup.Item>
        <ListGroup.Item>Fecha: {fecha}</ListGroup.Item>
      </ListGroup>
    </>
  );
};
