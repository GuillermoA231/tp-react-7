import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

function EmpleadoList() {
 
  return (
    <ListGroup className="my-3">
        <EmpleadoRow
        ></EmpleadoRow>
        <EmpleadoRow
        ></EmpleadoRow>
        <EmpleadoRow
        ></EmpleadoRow>
        <EmpleadoRow
        ></EmpleadoRow>
        <EmpleadoRow
        ></EmpleadoRow>
    </ListGroup>
  );
}

export default EmpleadoList;