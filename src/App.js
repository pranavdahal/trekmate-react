import './App.css';
import Header from './components/header';
import Register from './Register';
import Login from './Login';
import Home from './pages/home';
import About from './pages/about';
// import Services from './pages/services';
import Packages from './pages/packages';
import Contacts from './pages/contact';
import Footer from './components/footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <main className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element = {<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/services' element={<Services/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/packages' element={<Packages/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
