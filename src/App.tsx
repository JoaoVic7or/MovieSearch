import React, { useState } from "react";
import Header from "./components/Header";
import MovieContainer from "./container/MovieContainer";

const App: React.FC = () => {
  const [movieData, setMovieData] = useState<any[]>([]);

  return (
    <>
      <Header setMovieData={setMovieData} />
      <MovieContainer movieData={movieData} setMovieData={setMovieData} />
    </>
  );
}

export default App;
