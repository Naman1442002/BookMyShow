import React, { useContext} from 'react';
import UnitBlock from './Subcomp/UnitBlock';
import { movies } from './data'; // Assuming 'movies' is an array of movie names
import Context from './Context/CreateContext';

function Movies() {
  // Accessing 'movie' and 'setmovie' from the context
  const { movie, setmovie } = useContext(Context);

  // function pass as props to set the movie state in unitblock component on user click
  const selectBlockContent = (value) => {
    setmovie(value);
    // setting the user selection to local storage
    window.localStorage.setItem('movie', value)
  }

  return (
    <>
      <div className='movie' >
        <h2>Select a Movie</h2>
        <div className='movie-content'>
          {
            movies.map((movi, idx) => (
              // Render a UnitBlock for each movie in the 'movies' array
              <UnitBlock
                key={idx}
                text={movi}
                SelectContent={movie}
                selectBlockContent={selectBlockContent} // Set the selected movie in the context
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Movies;
