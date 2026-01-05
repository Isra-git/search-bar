import React, { Component } from "react";

// importamos redux
import { Field, reduxForm } from "redux-form";

// para dirigir a otra pagina
import { withRouter } from "react-router-dom";
class SearchBar extends Component {
  handleFormSubmit = function ({ query }) {
    console.log("HandleSubmit for query: ", query);
    //Navegar a otra ruta
    this.props.history.push("/results");
  };

  renderInput(field) {
    return (
      <input type="text" placeholder="Search DailySmarty" {...field.input} />
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="search-bar"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <Field name="query" component={this.renderInput} />
      </form>
    );
  }
}
SearchBar = reduxForm({
  form: "searchBar",
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;
