import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
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
FacturaDetalle.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
};
