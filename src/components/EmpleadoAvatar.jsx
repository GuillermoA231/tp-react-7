import { Image } from "react-bootstrap";
const EmpleadoAvatar = ({avatarEmpleado}) => {
  const rutaImagen = `./src/img/${avatarEmpleado}`;
    return <><Image src = {rutaImagen} width={100} height={100} roundedCircle/></>;
  };
export default EmpleadoAvatar