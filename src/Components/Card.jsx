import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMainState } from "../Context/Context";
import { toast } from "react-toastify";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useMainState();
  const [isFav, setIsFav] = useState(false);

  const addFav = () => {
    if (!isFav) {
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
      toast.success(`${name} agregado a favoritos`, {
        position: "bottom-right"});
      setIsFav(true);

    } else {
      dispatch({ type: "DELETE_FAV", payload: id });
      toast.error(`${name} quitado de favoritos` , {
        position: "bottom-right"});
      setIsFav(false);
    }
  };

  useEffect(() => {
    const encontrado = state.favs.find((fav) => fav.id === id);
    setIsFav(encontrado);
  }, []);

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <img src="/images/doctor.jpg"  alt="doctor image" />
      <Link to={"/dentista/" + id}>{name}</Link>
      <p>{username}</p>

      <button onClick={addFav} className="favButton">
        {isFav ? (
          <i className={"fas fa-star fav"}></i>
        ) : (
          <i className={"far fa-star"}></i>
        )}
      </button>
    </div>
  );
};

export default Card;
