import React, { useReducer } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import spinner from "../ajax-loader.gif";
import Search from "./Search";


const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
  text: "HOOKED"
};

export const SearchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // you can add this to the onClick listener of the Header component
  const refreshPage = () => {
    window.location.reload();
  };

  const { movies, errorMessage, loading } = state;

  return (
    <SearchContext.Provider
      value={{
        dispatch,
        state,
        reload: refreshPage
      }}
    >
      <div className="App">
        <Header />
        <Search />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {loading && !errorMessage ? (
            <img className="spinner" src={spinner} alt="Loading spinner" />
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default App;
