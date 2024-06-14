import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'


function App() {
  return (
      <div className="App">
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/dentista/:id' element={<Detail/>}/>
            <Route path="*" element={<h1>Error 404 - Elemento no encontrado</h1>} />
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;
