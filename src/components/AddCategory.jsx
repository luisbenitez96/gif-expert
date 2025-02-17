import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault(); // evita que se recargue la pagina
    if (inputValue.trim().length <= 1) {
      // esta validacion es para que no se agreguen categorias vacias
      return;
    }
    onNewCategory(inputValue.trim());
    // setCategories((categories) => [inputValue, ...categories]); //?  el operador spread sirve para desestructurar un array y traer todos los elementos de ese array.
    setInputValue(""); //! limpia el input
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
