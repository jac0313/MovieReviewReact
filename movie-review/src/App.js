import Hero from './Hero'
import './App.css';
import data from "./MovieData";
import Movie from "./Movie";


function App() {
  return (
    <div>
      <Hero/>
      <main>
        {data.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </main>
    </div>
  );
}

export default App;
