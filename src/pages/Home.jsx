/*home page component, allows users to search for movies and displays the results using the MovieList component.*/
/*useState is used to manage the movies and loading state, useEffect is used to fetch movies when the component mounts, useRef is used to reference the search input field for getting the search query.*/
import { useState, useEffect, useRef } from 'react'
/*MovieList component is imported to display the list of movies returned from the API, it receives the movies as a prop and renders them in a grid layout, it also handles the case when no movies are found by displaying a message.*/
import MovieList from '../components/MovieList'

/*Home component is the main component for the home page, it contains a search form and displays the list of movies based on the search query, it also shows a loading message while fetching data from the API.*/
function Home() {
    /*movies state to store the list of movies returned from the API, loading state to indicate when data is being fetched, inputRef to reference the search input field.*/
    const [movies, SetMovies] = useState([])
    /*loading state to indicate when data is being fetched, inputRef to reference the search input field.*/
    const [loading, setLoading] = useState(false)
    /*inputRef is used to reference the search input field, it allows us to access the current value of the input field when the user submits the search form, we can use it to get the search query and fetch movies based on that query.*/
    const inputRef = useRef()

    /*fetchMovies is an asynchronous function that takes a search query as an argument, it sets the loading state to true, makes a fetch request to the OMDB API with the search query, converts the response to JSON, updates the movies state with the search results, and finally sets the loading state back to false.*/
    const fetchMovies = async (query) => {
        /*setLoading(true) is called to indicate that the data fetching process has started, it can be used to show a loading spinner or message to the user while the data is being fetched from the API.*/
        setLoading(true)
        /*fetch request to the OMDB API with the search query, it uses the fetch function to make a GET request to the API endpoint, passing the search query as a parameter in the URL, it also includes an API key for authentication. The response is then converted to JSON format and stored in the data variable.*/
        const res = await fetch(`http://www.omdbapi.com/?apikey=9236f6af&s=${query}`)
        /*data variable holds the JSON response from the API, it contains the search results for the movies based on the query, it also logs the data to the console for debugging purposes. The movies state is updated with the search results, if there are no results it sets it to an empty array. Finally, setLoading(false) is called to indicate that the data fetching process has completed.*/
        const data = await res.json();
        /*logs the data to the console for debugging purposes, it allows us to see the structure of the response from the API and verify that we are receiving the expected data, it can also help identify any issues with the API request or response handling.*/
        console.log(data);
        /*SetMovies(data.Search || []) is used to update the movies state with the search results returned from the API, if there are no search results it sets the movies state to an empty array, this ensures that the MovieList component receives an empty array instead of undefined when there are no results, allowing it to handle the case of no movies found gracefully.*/
        SetMovies(data.Search || [])
        /*setLoading(false) is called to indicate that the data fetching process has completed, it can be used to hide the loading spinner or message that was shown while the data was being fetched, it allows the UI to update and display the search results once they have been successfully retrieved from the API.*/
        setLoading(false)
    }

    /*useEffect is used to fetch movies when the component mounts, it calls the fetchMovies function with a default search query "Revolution" to display some movies on the home page when it first loads, this ensures that users see some content immediately without having to perform a search right away.*/
    useEffect(() => {
        /*fetchMovies("Revolution") is called to fetch movies with the search query "Revolution" when the Home component mounts, it allows us to display some movies on the home page by default, providing users with immediate content to explore without having to perform a search right away, it can also serve as an example of how the search functionality works. what means [] -> it means that the effect will only run once when the component mounts, as there are no dependencies specified in the array. if we write 5 inside [] -> it means that the effect will run once when the component mounts and whenever the value of the variable at index 5 in the array changes.*/
        fetchMovies("Revolution")
    }, [])

    /*handleSearch is a function that is called when the search form is submitted, it prevents the default form submission behavior, gets the search query from the input field using inputRef, trims any whitespace from the query, and if the query is not empty, it calls the fetchMovies function with the search query to fetch movies based on that query.*/
    const handleSearch = (e) => {
        /*e.preventDefault() is called to prevent the default form submission behavior, which would cause the page to reload when the form is submitted, this allows us to handle the form submission in a custom way using JavaScript without refreshing the page, it enables us to fetch movies based on the search query and update the UI dynamically without losing any state or context of the application.*/
        e.preventDefault();
        /*query variable is assigned the value of the search input field, it uses inputRef to access the current value of the input field, trims any whitespace from the query using the trim() method, and checks if the query is not empty before calling the fetchMovies function with the search query to fetch movies based on that query, this ensures that we only make API requests when there is a valid search query entered by the user, preventing unnecessary requests and improving performance.*/
        const query = inputRef.current.value.trim();
        /*if the query is not empty, it calls the fetchMovies function with the search query to fetch movies based on that query, this allows us to retrieve and display movies that match the user's search criteria, providing a dynamic and interactive experience for users to explore different movies based on their interests.*/
        if(query){
            /*fetchMovies(query) is called to fetch movies based on the search query entered by the user, it allows us to retrieve and display movies that match the user's search criteria, providing a dynamic and interactive experience for users to explore different movies based on their interests, it also updates the movies state with the new search results, allowing the MovieList component to re-render and display the updated list of movies.*/
            fetchMovies(query)
        } 
    }
    
    /*the return statement renders the JSX for the Home component, it includes a search form with an input field and a search button, and conditionally renders either a loading message or the MovieList component based on the loading state, it also passes the movies state as a prop to the MovieList component to display the list of movies returned from the API.*/
  return (
    /*home page container with a search form and movie list, the form includes an input field for entering the search query and a button to submit the search, when the form is submitted it calls the handleSearch function to fetch movies based on the search query, while loading it displays a loading message, once the movies are fetched it renders the MovieList component with the movies as a prop to display the search results.*/
    <div className="home">
        {/*search form, onSubmit event is handled by the handleSearch function, it includes an input field for entering the search query and a button to submit the search, the input field is referenced using inputRef to access its value when the form is submitted, the button has a type of submit to trigger the form submission when clicked.*/}
		<form onSubmit={handleSearch}>
            {/*input field for entering the search query, it uses the inputRef to reference the input element, allowing us to access its value when the form is submitted, it has a placeholder text to guide users on what to enter in the search field.*/}
			<input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
            {/*search button to submit the search form, it has a type of submit to trigger the form submission when clicked, it also has a className for styling purposes.*/}
			<button className="searchButton" type="submit">Search 🔎</button>
		</form>

        {/*conditional rendering based on the loading state, if loading is true it displays a loading message, otherwise it renders the MovieList component with the movies as a prop to display the search results, this allows us to provide feedback to users while data is being fetched and display the results once they are available.*/}
        {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
		
	</div>
  )
}
/*exporting Home component so it can be used in App.jsx for routing, it allows us to navigate to the Home page when the user visits the root URL of the application, and it also enables us to display the search functionality and movie list on the home page for users to explore different movies based on their search queries.*/
export default Home