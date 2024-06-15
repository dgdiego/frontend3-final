import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card" style={{textAlign:"center"}}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={"/dentista/" + id}>
        <img
          style={{ maxWidth: "100%" }}
          src="/public/images/doctor.jpg"
          alt="doctor image"
        />
        <p>{name}</p>
        <p>{username}</p>
      </Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
