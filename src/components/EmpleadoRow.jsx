import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
const EmpleadoRow = ({}) => {
  return (
    <ListGroup>
      <div className="d-flex justify-content-center align-items-center py-3">
        <Row className="text-center">
          <Col>
            <EmpleadoAvatar/>
          </Col>
          <Col className="text-start">
          <h2>Nombre Empleado</h2>
          <p>Posicion <Badge bg="info">Departamento</Badge></p>
          </Col>
        </Row>
      </div>
    </ListGroup>
  );
};
export default EmpleadoRow;
