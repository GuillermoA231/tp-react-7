import { ListGroup, Row, Col, Badge } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
/*{ id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" } */
const EmpleadoRow = ({fullName,title,department,pic}) => {
  return (
    <ListGroup>
      <div className="d-flex justify-content-center align-items-center py-3">
        <Row className="text-center">
          <Col>
            <EmpleadoAvatar avatarEmpleado={pic}/>
          </Col>
          <Col className="text-start">
          <h2>{fullName}</h2>
          <p>{title} <Badge bg="info">{department}</Badge></p>
          </Col>
        </Row>
      </div>
    </ListGroup>
  );
};
export default EmpleadoRow;
