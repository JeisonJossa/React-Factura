import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
export const ClienteView = ({
  nombre,
  apellido,
  identificacion,
  direccion,
  ciudad,
  pais,
  telefono,
  email,
}) => {
  return (
    <>
      <ListGroup.Item>Nombre: {nombre}</ListGroup.Item>
      <ListGroup.Item>Apellido: {apellido}</ListGroup.Item>
      <ListGroup.Item>identificacion: {identificacion}</ListGroup.Item>
      <ListGroup.Item>direccion: {direccion}</ListGroup.Item>
      <ListGroup.Item>
        Ubicacion: {pais} {ciudad}
      </ListGroup.Item>
      <ListGroup.Item>email: {email}</ListGroup.Item>
      <ListGroup.Item>telefono: {telefono}</ListGroup.Item>
    </>
  );
};

ClienteView.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  identificacion: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  ciudad: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};