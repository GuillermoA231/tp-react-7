import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

function EmpleadoList() {
  let empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado02.png" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado03.png" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado04.png" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado05.png" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado06.png" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "empleado07.png" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "empleado08.png" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "empleado09.png" },
    { id: 10, fullName: "Dwayne Johnson", title: "Muscle of the Team", department: "Intimidation", pic: "empleado10.png" },
  ]
  /*{id,fullName,title,departmeent,pic} */
  return (
    <ListGroup className="my-5">
       {
        empleados.map((empleado) => (
          <EmpleadoRow key={empleado.id} id={empleado.id} fullName={empleado.fullName} title={empleado.title} department={empleado.department} pic={empleado.pic}></EmpleadoRow>
        ))
       }
    </ListGroup>
  );
}

export default EmpleadoList;