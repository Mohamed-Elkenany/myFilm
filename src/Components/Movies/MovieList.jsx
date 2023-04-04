import React from 'react';
import CardMovie from '../cardMovie/CardMovie';
import PigenationPage from '../pages/PaginationPage';
import "./MoviesList.css"
const MovieList = ({ movies, getAllMovies, numberOfPage, myid}) => {
  const changePage = (data) => {
    getAllMovies(data)
  }
  const Id = (filmId) => {
    myid(filmId);
  }
  return (
    <div className='d-flex flex-column justify-content-around align-items-center movContainer'>
        <div className='MovieList'>
      {
        movies.length >= 1 ? (
          movies.map((mov) => {
            return (<CardMovie key={mov.id} mov={mov} Id={Id} />);
        })
        ) : <h2>لا يوجد افلام</h2>
        }
        </div>
      <PigenationPage changePage={changePage} numberOfPage={numberOfPage} />
    </div>
  );
}

export default MovieList;
