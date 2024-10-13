import React from 'react';
import './MovieList.css'; 

const movies = [
  
  { title: "Black Panther", genre: "Action", rating: "7.3" },
  { title: "Get Out", genre: "Horror", rating: "7.7" },
  { title: "Moonlight", genre: "Drama", rating: "7.4" },
  { title: "Selma", genre: "Biography", rating: "7.5" },
  { title: "Coming to America", genre: "Comedy", rating: "7.0" },
  { title: "The Hate U Give", genre: "Drama", rating: "7.4" },
  { title: "12 Years a Slave", genre: "Historical Drama", rating: "8.1" },
  { title: "Us", genre: "Horror/Thriller", rating: "6.8" },
  { title: "Judas and the Black Messiah", genre: "Drama/Thriller", rating: "7.5" },
  { title: "Hidden Figures", genre: "Biography/Drama", rating: "7.8" },
  { title: "Queen & Slim", genre: "Romance/Thriller", rating: "7.1" },
  { title: "Creed", genre: "Drama/Sport", rating: "7.6" },
  { title: "Django Unchained", genre: "Western", rating: "8.4" },
  { title: "Fences", genre: "Drama", rating: "7.2" },
  { title: "If Beale Street Could Talk", genre: "Romance/Drama", rating: "7.1" },
  { title: "Love & Basketball", genre: "Romance/Sport", rating: "7.2" },
  { title: "The Butler", genre: "Biography/Drama", rating: "7.2" },
  { title: "BlackKKlansman", genre: "Biography/Crime", rating: "7.5" },
  { title: "Twelve", genre: "Drama", rating: "6.5" },
  { title: "The Photograph", genre: "Romance/Drama", rating: "6.1" },
  { title: "Soul", genre: "Animation/Family", rating: "8.1" },
  { title: "Dope", genre: "Comedy/Drama", rating: "7.2" },
  { title: "Girls Trip", genre: "Comedy", rating: "6.2" },
  { title: "The Black Godfather", genre: "Documentary", rating: "7.4" },
  { title: "Barbershop", genre: "Comedy", rating: "6.2" },
  { title: "Love Jones", genre: "Romance/Drama", rating: "7.2" },
  { title: "The Inkwell", genre: "Drama/Romance", rating: "6.5" },
  
  
  { title: "The Lion King", genre: "Animation", rating: "8.5" },
  { title: "Finding Nemo", genre: "Animation", rating: "8.1" },
  { title: "Moana", genre: "Animation", rating: "7.6" },
  { title: "Toy Story", genre: "Animation", rating: "8.3" },
  { title: "Frozen", genre: "Animation", rating: "7.4" },
  { title: "The Princess and the Frog", genre: "Animation", rating: "7.1" },
  { title: "Spider-Man: Into the Spider-Verse", genre: "Animation", rating: "8.4" },
  { title: "Coco", genre: "Animation", rating: "8.4" },
  { title: "Zootopia", genre: "Animation", rating: "8.0" },
  { title: "The Croods", genre: "Animation/Adventure", rating: "7.2" },
  { title: "Cloudy with a Chance of Meatballs", genre: "Animation/Comedy", rating: "7.0" },
  { title: "Kung Fu Panda", genre: "Animation/Action", rating: "7.6" },
  { title: "Sing", genre: "Animation/Comedy", rating: "7.1" },
  { title: "The Secret Life of Pets", genre: "Animation/Comedy", rating: "6.5" },
  { title: "Trolls", genre: "Animation/Adventure", rating: "6.5" },
  { title: "Hotel Transylvania", genre: "Animation/Comedy", rating: "7.1" },
  
  
  { title: "The Photograph", genre: "Drama/Romance", rating: "6.1" },
  { title: "Sorry to Bother You", genre: "Comedy/Sci-Fi", rating: "7.0" },
  { title: "Antebellum", genre: "Horror/Mystery", rating: "5.7" },
  { title: "Beale Street Could Talk", genre: "Drama/Romance", rating: "7.1" },
  { title: "First Match", genre: "Drama/Sport", rating: "6.3" },
  { title: "Step", genre: "Documentary", rating: "7.7" },
  { title: "The Harder They Fall", genre: "Western/Action", rating: "6.7" },
  { title: "Soul Food", genre: "Drama", rating: "6.8" },
  { title: "Proud Mary", genre: "Action/Thriller", rating: "5.5" },
  { title: "The Last Black Man in San Francisco", genre: "Drama", rating: "7.4" },
];

function MovieList() {
    const [movies, setMovies] = useState(moviesData);
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [sortOrder, setSortOrder] = useState("asc");
  
    const handleGenreChange = (event) => {
      const genre = event.target.value;
      setSelectedGenre(genre);
      
      if (genre === "All") {
        setMovies(moviesData);
      } else {
        setMovies(moviesData.filter(movie => movie.genre.includes(genre)));
      }
    };
  
    const handleSortChange = (event) => {
      const order = event.target.value;
      setSortOrder(order);
      
      const sortedMovies = [...movies].sort((a, b) => {
        return order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      });
      
      setMovies(sortedMovies);
    };
  
    return (
      <div className="movie-list">
        <h2>Top Movies</h2>
        
        {/* Genre Filter */}
        <label>
          Filter by Genre:
          <select onChange={handleGenreChange}>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Animation">Animation</option>
            <option value="Horror">Horror</option>
            <option value="Biography">Biography</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </label>
  
        {/* Sort Order */}
        <label>
          Sort by Title:
          <select onChange={handleSortChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
  
        <ul>
          {movies.map((movie, index) => (
            <li key={index} className="movie-item" onClick={() => alert(`Title: ${movie.title}\nGenre: ${movie.genre}\nRating: ${movie.rating}/10`)}>
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Rating: {movie.rating}/10</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }