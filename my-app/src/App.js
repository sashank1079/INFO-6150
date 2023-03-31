
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Jobs from './pages/Jobs/Jobs';
import Profile from './pages/Profile/Profile';
import Login from './Login/LoginPage';


function App() {
  return (
    <Router>

    <Routes>
    <Route path = "/Home" element = {<Home/>}></Route>
    <Route path = "/About" element = {<About/>}></Route>
    <Route path = "/Jobs" element = {<Jobs/>}></Route>
    <Route path = "/Profile" element = {<Profile/>}></Route>
    <Route path = "/" element = {<Login/>}></Route>
    </Routes>
   
   
  </Router>
  );
}

export default App;
