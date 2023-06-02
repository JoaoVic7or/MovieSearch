import { useState } from "react";
import Header from "./components/Header";
import MovieContainer from "./container/MovieContainer";
import ListToWatch from "./components/ListToWatch";

function App() {
  const [movieData, setMovieData] = useState<any[]>([]);
  const [badgeContent, setBadgeContent] = useState<number>(0);

  return (
    <>
      <Header setMovieData={setMovieData} />
      <ListToWatch badgeContent={badgeContent}/>
      <MovieContainer movieData={movieData} setMovieData={setMovieData} setBadgeContent={setBadgeContent} />
    </>
  );
}

export default App
