import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
export const FacturaItemsView = ({ productos }) => {

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(({ id, descripcion, cantidad, precio }) => (
            <tr key={id}>
              <td>{descripcion}</td>
              <td>{cantidad}</td>
              <td>{precio}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

FacturaItemsView.propTypes = {
  productos: PropTypes.array.isRequired,
};