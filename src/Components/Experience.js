import React, {Component} from 'react';

const Experience = (props) =>{
    return (
      <div className="item">
          <div className="meta">
              <div className="upper-row">
                  <h3 className="job-title">{props.title}</h3>
                  <div className="time">{props.period}</div>
              </div>
              <div className="company">{props.company}</div>
          </div>
          <div className="details">
              {props.details}
          </div>
      </div>
    )
}

export default Experience;
