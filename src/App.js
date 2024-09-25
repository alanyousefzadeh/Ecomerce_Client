import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm/LoginForm";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from "./components/Register/Register";
import UserDetails from "./components/UserDetailes";



function App() {
  return (
    <div>
        <Router>
         <NavBar/>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/register" element={<RegisterForm/>} />
                <Route path="/user-details" element={<UserDetails/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
