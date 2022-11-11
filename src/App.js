//import logo from './logo.svg';
import './App.css';
// import del bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
// import Login from './components/Login/Login';
import AppRoutes from './components/router/router';
import NavbarMenu from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Container>
        <AppRoutes />
      </Container>
    </div>
  );
}

export default App;
