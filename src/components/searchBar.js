import React, { useState, useEffect, useRef, useEffectEvent } from "react";

// importamos redux
import { Field, reduxForm } from "redux-form";

// para dirigir a otra pagina
import { withRouter } from "react-router-dom";

// para disparar acciones
import { useDispatch } from "react-redux";

// importamos las acciones
import * as actions from "../actions";

/* --  funcion renderInput para renderizar el input en redux-form -- */
const renderInput = (field) => {
  // desesctructuramos los valores del input que necesitamos
  const { inputRef, setQuery, placeholder } = field;
  return (
    <input
      {...field.input}
      ref={inputRef}
      type="text"
      placeholder="Search storys in hacker news.."
      onChange={(event) => {
        setQuery(event.target.value);
        field.input.onChange(event);
      }}
    />
  );
};
/*-----------Inicio SearchBar--*/
const SearchBar = (props) => {
  // incializamos el estado
  const [query, setQuery] = useState("");

  // creamos la referencia para el autofocus de la barra
  const inputRef = useRef(null);

  // inicializamos el dispatch
  const dispatch = useDispatch();

  const handleFormSubmit = ({ query }) => {
    if (event) event.preventDefault();
    console.log("HandleSubmit for query: ", query);

    // disparamos la accion de busqueda con la {query} del usuario
    dispatch(actions.fetchResultPosts({ query }));

    //Navegar a /results, si no estamos en ella
    if (props.location.pathname !== "/results") {
      props.history.push("/results");
    }
  };

  // cuando se monta el componente usamos la Ref, para darle el foco
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { handleSubmit } = props;

  return (
    <form className="search-bar" onSubmit={handleSubmit(handleFormSubmit)}>
      <Field
        name="query"
        component={renderInput}
        inputRef={inputRef}
        setQuery={setQuery}
      />
    </form>
  );
};

const decoratedSearchBar = reduxForm({
  form: "searchBar",
})(SearchBar);

// withRouter, permite acceder a histoy, location, match via props
export default withRouter(decoratedSearchBar);
