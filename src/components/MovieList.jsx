/*MovieList component is responsible for displaying a list of movies, it receives an array of movie objects as a prop and maps through the array to render a MovieCard component for each movie, it also handles the case when there are no movies found by displaying a message to the user, it allows users to easily view and access information about multiple movies in a structured format, enhancing the overall user experience when exploring different movies based on their search queries.*/
import MovieCard from "./MovieCard"

/*MovieList component is responsible for displaying a list of movies, it receives an array of movie objects as a prop and maps through the array to render a MovieCard component for each movie, it also handles the case when there are no movies found by displaying a message to the user, it allows users to easily view and access information about multiple movies in a structured format, enhancing the overall user experience when exploring different movies based on their search queries.*/
function MovieList({ movies }) {
    /*if there are no movies found (i.e., the movies array is empty), it returns a message to the user indicating that no movies were found, this provides feedback to users when their search query does not yield any results, helping them understand that they may need to modify their search criteria or try a different query to find movies they are interested in.*/
    if(movies.length === 0 ){
        /*returning a message to the user indicating that no movies were found, this provides feedback to users when their search query does not yield any results, helping them understand that they may need to modify their search criteria or try a different query to find movies they are interested in.*/
        return <p>No Movies Found.</p>
    }

    /*the return statement renders the JSX for the MovieList component, it maps through the movies array and renders a MovieCard component for each movie, passing the movie object as a prop to the MovieCard component, this allows us to display information about multiple movies in a structured format, enhancing the overall user experience when exploring different movies based on their search queries, it also ensures that each MovieCard component has a unique key prop (using the imdbID) to help React efficiently update and render the list of movies when changes occur.*/
  return (
    /*movie list container, it maps through the movies array and renders a MovieCard component for each movie, passing the movie object as a prop to the MovieCard component, this allows us to display information about multiple movies in a structured format, enhancing the overall user experience when exploring different movies based on their search queries, it also ensures that each MovieCard component has a unique key prop (using the imdbID) to help React efficiently update and render the list of movies when changes occur.*/
    <div className="movie-list">
        {/*mapping through the movies array and rendering a MovieCard component for each movie, passing the movie object as a prop to the MovieCard component, this allows us to display information about multiple movies in a structured format, enhancing the overall user experience when exploring different movies based on their search queries, it also ensures that each MovieCard component has a unique key prop (using the imdbID) to help React efficiently update and render the list of movies when changes occur.*/}
        {movies.map((movie) => (
            <MovieCard  key={(movie.imdbID)} movie={movie}  />
        ))}
        
    </div>
  )
}
/*exporting MovieList component so it can be used in Home.jsx to display the list of movies returned from the API, it allows us to modularize our code and reuse the MovieList component for displaying movie results based on different search queries, providing a consistent and organized way to present movie information across the application.*/
export default MovieList