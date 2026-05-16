/*MovieCard component is responsible for displaying individual movie information in a card format, it receives a movie object as a prop and renders the movie's poster, title, year, and a link to the movie details page, it allows users to easily view and access more information about each movie in the search results.*/
/*link -> Link component from react-router-dom is used to create a navigable link to the movie detail page, it allows users to click on the "Details" link and navigate to the corresponding movie detail page without refreshing the entire page, providing a smooth and seamless user experience in a single-page application.*/
import { Link } from "react-router-dom"

/*MovieCard component is responsible for displaying individual movie information in a card format, it receives a movie object as a prop and renders the movie's poster, title, year, and a link to the movie details page, it allows users to easily view and access more information about each movie in the search results.*/
function MovieCard({ movie }) {
  /*the return statement renders the JSX for the MovieCard component, it displays the movie's poster image, title, release year, and a link to the movie details page using the Link component from react-router-dom, this allows users to easily view and access more information about each movie in the search results by clicking on the "Details" link, which navigates them to the corresponding movie detail page without refreshing the entire page, providing a smooth and seamless user experience in a single-page application.*/
  return (
    /*movie card container, it displays the movie's poster image, title, release year, and a link to the movie details page using the Link component from react-router-dom, this allows users to easily view and access more information about each movie in the search results by clicking on the "Details" link, which navigates them to the corresponding movie detail page without refreshing the entire page, providing a smooth and seamless user experience in a single-page application.*/
    <div className="movie-card">
      {/*movie poster image is displayed using an img element, it uses the Poster property from the movie object as the source of the image, and the Title property as the alt text for accessibility, this allows users to visually see the poster of each movie in the search results, enhancing their experience and providing a visual representation of the movies along with their titles and release years.*/}
        <img alt={movie.Title} src={movie.Poster} />
        {/*movie title is displayed in an h3 element, it uses the Title property from the movie object to show the name of the movie, this allows users to easily identify each movie in the search results and provides a clear heading for each movie card.*/}
        <h3>{movie.Title}</h3>
        {/*movie release year is displayed in a paragraph element, it uses the Year property from the movie object to show the release year of the movie, this gives users context about when each movie was released, which can be important for understanding its relevance and popularity, and can also help users decide if they want to watch it based on their preferences for movies from certain time periods.*/}
        <p>{movie.Year}</p>
        {/*Link component from react-router-dom is used to create a navigable link to the movie detail page, it allows users to click on the "Details" link and navigate to the corresponding movie detail page without refreshing the entire page, providing a smooth and seamless user experience in a single-page application, the URL for the movie detail page is constructed using the imdbID property from the movie object to ensure that each movie card links to its specific detail page.*/}
        <Link to={`/movie/${movie.imdbID}`}>Details</Link>
    </div>
  )
}
/*exporting MovieCard component so it can be used in MovieList.jsx to display individual movie information in a card format, it allows us to modularize our code and reuse the MovieCard component for each movie in the search results, providing a consistent and organized way to display movie information across the application.*/
export default MovieCard