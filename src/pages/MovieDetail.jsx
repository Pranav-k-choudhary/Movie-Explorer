/*MovieDetail component is responsible for displaying the details of a specific movie, it uses the useParams hook from react-router-dom to get the movie ID from the URL, and useEffect to fetch the movie details from the OMDB API when the component mounts, it also manages the movie state using useState to store the fetched movie details and display them in the UI.*/
//useParams is a hook provided by react-router-dom that allows us to access the parameters of the current route, in this case we use it to get the movie ID from the URL, which is then used to fetch the details of that specific movie from the API.
import { useParams } from 'react-router-dom'
/*useEffect is a React hook that allows us to perform side effects in functional components, it takes a function as an argument and runs that function after the component renders, we use it here to fetch the movie details from the API when the component mounts, and we specify the movie ID as a dependency so that the effect runs again if the ID changes.*/
import { useEffect, useState } from 'react'

/*MovieDetail component is responsible for displaying the details of a specific movie, it uses the useParams hook from react-router-dom to get the movie ID from the URL, and useEffect to fetch the movie details from the OMDB API when the component mounts, it also manages the movie state using useState to store the fetched movie details and display them in the UI.*/
function MovieDetail() {
  /*useParams is used to get the movie ID from the URL, it allows us to access the dynamic parameter defined in the route (in this case :id) and use it to fetch the details of that specific movie from the API, it returns an object with key-value pairs where the key is the name of the parameter and the value is the actual value from the URL.*/
    const { id } = useParams()
    /*movie state is used to store the details of the fetched movie, it is initialized to null and will be updated with the movie details once they are fetched from the API, this allows us to conditionally render the movie details in the UI once they are available, and also handle the loading state while the data is being fetched.*/
    const [movie, SetMovie] = useState(null)

    /*useEffect is used to fetch the movie details from the API when the component mounts, it defines an asynchronous function getMovie that makes a fetch request to the OMDB API with the movie ID, converts the response to JSON, updates the movie state with the fetched data, and logs the data to the console for debugging purposes, it then calls the getMovie function to execute the fetch operation, and specifies the movie ID as a dependency so that the effect runs again if the ID changes (e.g., if the user navigates to a different movie detail page).*/
    useEffect(() => {
      /*getMovie is an asynchronous function that makes a fetch request to the OMDB API with the movie ID, converts the response to JSON, updates the movie state with the fetched data, and logs the data to the console for debugging purposes, it allows us to retrieve the details of a specific movie based on its ID and store it in the state for rendering in the UI.*/
        async function getMovie() {
          /*fetch request to the OMDB API with the movie ID, it uses the fetch function to make a GET request to the API endpoint, passing the movie ID as a parameter in the URL, it also includes an API key for authentication. The response is then converted to JSON format and stored in the data variable.*/
          const res = await fetch(`http://www.omdbapi.com/?apikey=9236f6af&i=${id}`)
          /*data variable holds the JSON response from the API, it contains the details of the fetched movie based on the ID, it also logs the data to the console for debugging purposes. The movie state is updated with the fetched movie details, allowing us to render those details in the UI once they are available.*/
          const data = await res.json();  
          /*SetMovie(data) is used to update the movie state with the fetched movie details, it allows us to store the details of the specific movie that was retrieved from the API, and once the state is updated, it triggers a re-render of the component to display those details in the UI. The console.log(data) statement is included for debugging purposes, allowing us to see the structure of the fetched data and verify that we are receiving the expected movie details from the API.*/
          SetMovie(data)
          /*logs the data to the console for debugging purposes, it allows us to see the structure of the fetched data and verify that we are receiving the expected movie details from the API, it can also help identify any issues with the API request or response handling.*/
          console.log(data)
        }
        /*getMovie() is called to execute the fetch operation and retrieve the movie details from the API, it allows us to initiate the data fetching process when the component mounts, and once the data is fetched and the state is updated, it enables us to render the movie details in the UI for users to view. The useEffect hook ensures that this operation runs at the appropriate time in the component's lifecycle, and also handles any necessary cleanup if the component unmounts or if the ID changes.*/
        getMovie();
    }, [id])

    /*if the movie state is still null (i.e., the data is still being fetched), it returns a loading message to indicate that the details are being loaded, this provides feedback to users while they wait for the data to be retrieved from the API, and prevents rendering of incomplete or undefined movie details in the UI until the data is fully available.*/
    if(!movie) return <p>Loading...</p>

    /*the return statement renders the JSX for the MovieDetail component, it displays the title, poster image, genre, release date, and plot of the movie using the data stored in the movie state, this allows users to view the details of the specific movie they selected from the home page, providing an informative and engaging experience as they explore different movies based on their interests.*/
  return (
    /*movie detail container, it displays the title, poster image, genre, release date, and plot of the movie using the data stored in the movie state, it provides a detailed view of the selected movie for users to explore and learn more about it.*/
    <div className="movie-detail">
      {/*movie title is displayed in an h2 element, it uses the Title property from the movie state to show the name of the movie, this allows users to easily identify which movie they are viewing the details for, and provides a clear heading for the movie detail page.*/}
		<h2>{movie.Title}</h2>
    {/*movie poster image is displayed using an img element, it uses the Poster property from the movie state as the source of the image, and the Title property as the alt text for accessibility, this allows users to visually see the poster of the movie they are viewing, enhancing their experience and providing a visual representation of the movie along with its details.*/}
		<img alt={movie.Title} src={movie.Poster} />
    {/*movie genre is displayed in a paragraph element, it uses the Genre property from the movie state to show the genre(s) of the movie, this provides users with information about the type of movie they are viewing, helping them understand the movie's style and content, and allowing them to decide if it's something they are interested in watching.*/}
		<p><strong>Genre:</strong> {movie.Genre}</p>
    {/*movie release date is displayed in a paragraph element, it uses the Released property from the movie state to show the release date of the movie, this gives users context about when the movie was released, which can be important for understanding its relevance and popularity, and can also help users decide if they want to watch it based on their preferences for movies from certain time periods.*/}
		<p><strong>Released:</strong> {movie.Released}</p>
    {/*movie plot is displayed in a paragraph element, it uses the Plot property from the movie state to show a brief summary of the movie's storyline, this provides users with an overview of what the movie is about, helping them determine if it's something they are interested in watching, and can also enhance their understanding and appreciation of the movie by giving them insight into its narrative and themes.*/}
		<p><strong>Plot:</strong> {movie.Plot}</p>
	</div>
  )
}
/*exporting MovieDetail component so it can be used in App.jsx for routing, it allows us to navigate to the movie detail page when a user clicks on a movie from the home page, and it also enables us to display the details of the selected movie based on its ID in the URL, providing an informative and engaging experience for users as they explore different movies based on their interests.*/
export default MovieDetail