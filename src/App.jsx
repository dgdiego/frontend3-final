import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="*" element={<h1>Error 404 - Elemento no encontrado</h1>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
