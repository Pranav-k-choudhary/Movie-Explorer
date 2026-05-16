## Movie Explorer

Movie Explorer is a React-based web application that allows users to search for movies, explore trending films, and view detailed movie information using the OMDb API.

## Features:-
- Search movies by title
- View movie posters, title, and release year
- Detailed movie information page
- Genre, release date, and plot details
- Fast and smooth navigation using React Router
- Clean and responsive UI

  ## Technologies Used:-
- React.js
- JavaScript (ES6+)
- React Router DOM
- CSS3
- OMDb API

## Workflow:-
- User opens the Movie Explorer website.
- The Home page loads with default movies fetched from the OMDb API.
- User enters a movie name in the search bar.
- On clicking the Search button, the app sends a request to the OMDb API.
- The API returns movie data including:
   -> Movie Title
   -> Poster
   -> Release Year
   -> IMDb ID
- The MovieList component displays all movie results using MovieCard components.
- User clicks on the "Details" button of any movie.
- React Router navigates to the Movie Detail page using the movie's IMDb ID.
- The MovieDetail component fetches complete movie information from the OMDb API.
- Detailed information is displayed:
    -> Title
    -> Poster
    -> Genre
    -> Release Date
    -> Plot Summary
- User can navigate back to the Home page using the Navbar.

