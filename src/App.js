import './App.css';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Packages from './pages/packages';
import Contacts from './pages/contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Packages/>
      <Contacts/>

    </div>
    
  );
}

export default App;
