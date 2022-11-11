//import logo from './logo.svg';
import './App.css';
// import del bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <Container>
        <Login />
      </Container>
    </div>
  );
}

export default App;
