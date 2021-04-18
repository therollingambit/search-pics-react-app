import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = { images: [] }; //initialise state.images with empty array

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos/", { //from unsplash.js
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    ); //onSubmit prop in SearchBar component can be renamed to anything
  }
}

export default App;
