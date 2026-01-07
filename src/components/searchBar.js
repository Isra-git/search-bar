import React from "react";

// importamos redux
import { Field, reduxForm } from "redux-form";

// para dirigir a otra pagina
import { withRouter } from "react-router-dom";

// para disparar acciones
import { useDispatch } from "react-redux";

const SearchBar = (props) => {
  const handleFormSubmit = ({ query }) => {
    console.log("HandleSubmit for query: ", query);
    //Navegar a otra ruta
    props.history.push("/results");
  };

  const renderInput = (field) => {
    return (
      <input
        type="text"
        placeholder="Search storys in hacker news.."
        {...field.input}
      />
    );
  };

  const { handleSubmit } = props;

  return (
    <form className="search-bar" onSubmit={handleSubmit(handleFormSubmit)}>
      <Field name="query" component={renderInput} />
    </form>
  );
};

const decoratedSearchBar = reduxForm({
  form: "searchBar",
})(SearchBar);

export default withRouter(decoratedSearchBar);
