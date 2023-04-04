import React, { useEffect, useState } from 'react';
import "./App.css"
import MovieList from './Components/Movies/MovieList';
import FilmDetails from "./Components/filmDetails/FilmDetails"
import NavBar from "./Components/navbar/Navbar";
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [numberOfPage, setNumberOfPage] = useState(0)
  const [details,setDetails]=useState([])
  const getAllMovies = async (number) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=91d5b4107e3fcf446472aad021a3916f&language=en-US&page=${number}`);
    setMovies(res.data.results);
    setNumberOfPage(res.data.total_pages)
  }
  const myid = (myid) => {
    getDetails(myid);
  }
  const getDetails = async (id) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=91d5b4107e3fcf446472aad021a3916f&language=ar`);
    setDetails(res.data)
  }
  const searchMovie = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=91d5b4107e3fcf446472aad021a3916f&query=${word}&language=en-US`);
      setMovies(res.data.results);
    }
  }
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div>
      <NavBar searchMovie={searchMovie} />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<MovieList movies={movies} getAllMovies={getAllMovies} numberOfPage={numberOfPage} myid={myid} />} />
            <Route path="/:id" element={<FilmDetails details={details}/>} />
          </Routes>
       </Router>
      </Container>
    </div>
  );
}

export default App;
