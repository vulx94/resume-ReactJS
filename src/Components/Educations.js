import React , {Component} from 'react';


const Educations = (props) => {
  return (
    <div className="item">
        <h4 className="degree">{props.degree}</h4>
        <h5 className="meta">{props.universtity}</h5>
        <div className="time">{props.period}</div>
    </div>
  )
}

export default Educations;
