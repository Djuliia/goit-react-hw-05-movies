// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// export const SearchForm = ({ onSubmit }) => {
//   const [movies, setMovies] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieId = searchParams.get('movieId') ?? '';

//   useEffect(() => {
//     // Тут виконуємо  HTTP-запит за інформацією про користувача
//     if (movieId === '') return;

//     async function fetchMovie() {
//       const movie = await axios.get(movieId);
//       setMovies(movies);
//     }

//     fetchMovie();
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ movieId: form.elements.movieId.value });
//     form.reset();
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           // name="movieId"
//           autoFocus
//           autoComplete="off"
//           placeholder="input movie"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </>
//   );
// };
