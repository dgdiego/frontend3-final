import React from "react";
import Card from "../Components/Card";
import { useMainState } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useMainState();

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid container-wrapper">
        {/* Aqui deberias renderizar las cards */}
        {state.dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
