import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMainState } from "../Context/Context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useMainState();
  const [isFav, setIsFav] = useState(false);

  const addFav = () => {
    if (!isFav) {
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
      setIsFav(true);
      alert("Agregado");
    } else {
      dispatch({ type: "DELETE_FAV", payload: id });
      setIsFav(false);
      alert("Borrado");
    }
  };

  useEffect(() => {
    const encontrado = state.favs.find((fav) => fav.id === id);
    setIsFav(encontrado);
  }, []);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <img
        style={{ maxWidth: "100%" }}
        src="/images/doctor.jpg"
        alt="doctor image"
      />
      <Link to={"/dentista/" + id}>{name}</Link>
      <p>{username}</p>

      <button onClick={addFav} className="favButton">
        {isFav ? (
          <i className={"fas fa-star"}></i>
        ) : (
          <i className={"far fa-star"}></i>
        )}
      </button>
    </div>
  );
};

export default Card;
