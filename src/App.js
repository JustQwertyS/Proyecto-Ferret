
import './App.css';
import AddHuron from './components/AddHuron';
import Hurones from './components/Hurones';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Huron from './components/Huron';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Terminos from './components/Terminos';
import Privacidad from './components/Privacidad';

function App() {
  return (
        <Router>
          <div className="container" style={{paddingBottom:'100px'}}>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/hurones/:id' element={<Huron/>}/>
          <Route path='/contactar' element={<Contact/>}/>
          <Route path='/terms' element={<Terminos/>}/>
          <Route path='/privacy' element={<Privacidad/>}/>
          <Route path='/' element={
        <div className='row'>
          <div className='col-md-8 col-sm-12'>
            <Hurones/>
          </div>
        <div className='col-md-4 col-sm-4'>
           <AddHuron/>
          </div>
        </div>
        }/>
      </Routes>
        <Navbar/>
    </div>
        <Footer/>
    </Router>  
  );
}

export default App;