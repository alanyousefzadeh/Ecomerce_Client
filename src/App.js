import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm/LoginForm";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
        <NavBar/>
        <LoginForm/>
    </div>
  );
}

export default App;
