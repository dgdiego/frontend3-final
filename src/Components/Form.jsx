import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [typeSubmit, setTypeSubmit] = useState({});
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name.trim().length > 5 && regexEmail.test(data.email)) {
      console.log(
        `Datos del submit: Nombre: ${data.name} - Email: ${data.email}`
      );
      setTypeSubmit({ success: true });
    } else {
      setTypeSubmit({ error: true });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
            setTypeSubmit({});
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
            setTypeSubmit({});
          }}
        />
        <button>Enviar</button>
      </form>
      {typeSubmit.success && (
        <p>{`Gracias ${data.name}, te contactaremos cuando antes vía mail`}</p>
      )}
      {typeSubmit.error && <p>Por favor verifique su información nuevamente</p>}
    </div>
  );
};

export default Form;
