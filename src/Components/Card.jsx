import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMainState } from "../Context/Context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useMainState();
  const [isFav, setIsFav] = useState(false);

  const addFav = () => {
    if (!isFav) {
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
    } else {
      dispatch({ type: "DELETE_FAV", payload: id });
    }
  };

  useEffect(() => {
    const encontrado = state.favs.find((fav) => fav.id === id);
    setIsFav(encontrado);
  }, [state.favs]);

  return (
    <div className="card" style={{ textAlign: "center" }}>
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
        {isFav ? "Encontrado" : "No encontrado"}
      </button>
    </div>
  );
};

export default Card;
