import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export const TotalView = ({total}) => {
  return (
    <>
    <ListGroup.Item>Total: {total}</ListGroup.Item>
    </>
  );
};

TotalView.propTypes = {
  total: PropTypes.number.isRequired,
};
