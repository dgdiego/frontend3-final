import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMainState } from "../Context/Context";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state } = useMainState();
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const API_URL = `${state.api_url}/${params.id}`;

  useEffect(() => {
    axios(API_URL)
      .then((res) => {
        if (res.status == 200) {
          setDentist(res.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={`${state.theme} section`}>
      <div className="container-wrapper">
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        {dentist.id ? (
          <>
            <h1>Detalle Dentista {dentist.id}</h1>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Sitio web</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dentist.name}</td>
                  <td>{dentist.email}</td>
                  <td>{dentist.phone}</td>
                  <td>{dentist.website}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <h2>Cargando...</h2>
        )}
      </div>
    </div>
  );
};

export default Detail;
