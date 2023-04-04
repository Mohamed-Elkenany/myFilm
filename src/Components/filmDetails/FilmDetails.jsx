import React from 'react';
import "./FilmDetails.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';
const FilmDetails = ({ details}) => {
  return (
    <div className="d-flex flex-column align-items-center w-100">
      <Zoom style={{with:"100%"}}>
    <div className="card my-3 p-2 w-100">
      <div className='d-flex flex-row-reverse'>
     <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="" style={{height:"50vh"}}/>
     <div className="card-body">
              <h5 className="card-text my-4" style={{direction:"rtl"}}>اسم الفيلم : {details.title}</h5>
              <h6 className="card-text my-4" style={{direction:"rtl"}}>تاريخ الانتاج: {details.release_date}</h6>
              <h6 className="card-text my-4" style={{direction:"rtl"}}>عدد المشاهدات: {details.popularity}</h6>
              <h6 className="card-text my-4" style={{direction:"rtl"}}>التقييم: {details.vote_average}</h6>
              <div>
                <h6 className="card-text my-4" style={{ direction: "rtl" }}>القصة : </h6>
                <p className="text-end">{details.overview}</p>
              </div>
        </div>
        </div>
      </div>
      </Zoom>
      <div className="d-flex gap-4" >
      <Link to="/"><Button>الصفحة الرئيسي</Button></Link>
      <a href={details.homepage}><Button>مشاهدة الفيلم</Button></a>
      </div>
      </div>
  );
}

export default FilmDetails;
