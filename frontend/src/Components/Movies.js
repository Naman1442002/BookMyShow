import React, { useContext, useState } from 'react';
import UnitBlock from './Subcomp/UnitBlock';
import { movies } from './data'; // Assuming 'movies' is an array of movie names
import Context from './Context/CreateContext';

function Movies() {
  const [bg, setbg] = useState(null);

  // Function to handle selecting a movie block
  const selectBlock = (value) => {
    setbg(value);
  }

  // Accessing 'movie' and 'setmovie' from the context
  const { movie, setmovie } = useContext(Context);

  return (
    <>
      <div  className='movie' >
        <h2>Select a Movie</h2>
        <div className='movie-content'>
          {
            movies.map((movi, idx) => (
              // Render a UnitBlock for each movie in the 'movies' array
              <UnitBlock
                key={idx}
                text={movi}
                selectBlock={selectBlock}
                selectBlockContent={(value) => { setmovie(value) }} // Set the selected movie in the context
                visit={movie === '' ? '' : bg === movi ? 'visit' : ''} // Apply 'visit' class if the movie is selected
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Movies;
