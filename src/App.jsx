import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import EmpleadoRow from './components/EmpleadoRow'
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <>
      <Container className="my-5 main">
        <h1 className="display-3 text-center">Ejercicio 7</h1> 
        <hr />
        <EmpleadoList/>
      </Container>
      <footer className='text-center bg-dark text-light py-4'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  );
}

export default App;
