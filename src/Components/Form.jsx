import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [typeSubmit, setTypeSubmit] = useState({})
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.name.length>3){
      setTypeSubmit({success:true})
    }else{
      setTypeSubmit({error:true})
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <button>Enviar</button>
      </form>
      {typeSubmit.success && <p>Logrado</p>}
      {typeSubmit.error && <p>Error</p>}
    </div>
  );
};

export default Form;
