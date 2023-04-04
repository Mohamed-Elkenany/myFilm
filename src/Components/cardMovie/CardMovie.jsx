import React from 'react';
import { Col } from 'react-bootstrap';
import "./cardMovie.css"
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
const CardMovie = ({ mov,Id}) => {
  const filmId = (filmId) => {
    Id(filmId)
  }
    return (
        <Col lg='2' md="3" sm="5" xs="12" className='py-4 cardMovie'>
          <Zoom>
            <Link to={`/${mov.id}`} onClick={()=>filmId(mov.id)}>
                <div className='card'>
              <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} alt="" />
              <div className="over_lay">
                  <div className="overlay_text">
                      <p>اسم الفيلم : {mov.title}</p>
                      <p>تاريخ الاصدار : {mov.release_date}</p>
                      <p>عدد المشاهدات : {mov.popularity}</p>
                  <p>التقييم : {mov.vote_average}</p>
                  </div>
              </div>
          </div>
            </Link>
            </Zoom>
            </Col>
  );
}

export default CardMovie;
