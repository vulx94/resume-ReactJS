import React , {Component} from 'react';

const Skillsets = (props) =>  {
  return (
    <div className="skillset">
        <div className="item">
            <h3 className="level-title">{props.name}</h3>
            <div className="level-bar">
                <div className="level-bar-inner" data-level={props.percent}>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skillsets;
