import {Link} from 'react-router-dom'

function MovieCard({title, id}) {

    return (
      <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div key={movie.title}>
            <h2>{movie.title}</h2>
            <p>Time: {movie.time}</p>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default Movies;