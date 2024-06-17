import React from "react";
import { Link } from "react-router-dom";
import { useMainState } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useMainState();

  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      DH Odonto
      <Link to={"/"}>Home</Link>
      <Link to={"/contacto"}>Contacto</Link>
      <Link to={"/favs"}>Favs</Link>
      <button onClick={() => dispatch({type:'CHANGE_THEME'})}>{state.theme == 'dark'?  <i className={'fas fa-lightbulb'}></i> : <i className={'fas fa-moon'}></i>}</button>
    </nav>
  );
};

export default Navbar;
