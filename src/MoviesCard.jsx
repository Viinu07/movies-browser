const MoviesCard = ({ movie }) => {
  return (
    <div className="movie">
      {/* Movie year is displayed */}
      <div>
        <p>{movie.Year}</p>
      </div>
      {/* Movie poster is displayed */}
      <div>
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/400'
          }
          alt={movie.Title}
        />
      </div>
      {/* Movie/TVShow type is displayed */}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MoviesCard;
