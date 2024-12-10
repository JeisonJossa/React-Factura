import { useState, useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
export const FormuItemsFactura = ({ handler }) => {
  const [form, setForm] = useState({
    descripcion: "",
    cantidad: "",
    precio: "",
  });
  // Manejo de cambios en los inputs
  const handleImputCambio = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  // Agregar un nuevo producto
  const onSubmitItem = (e) => {
    e.preventDefault();

    if (!form.descripcion || form.cantidad <= 0 || form.precio <= 0) {
      alert("Por favor completa todos los campos con valores válidos.");
      return;
    }

    handler(form);

    setForm({ descripcion: "", cantidad: "", precio: "" });
  };

  return (
    <>
      <Form onSubmit={onSubmitItem}>
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
    </>
  );
};

FormuItemsFactura.propTypes = {
  handler: PropTypes.func.isRequired,
};
