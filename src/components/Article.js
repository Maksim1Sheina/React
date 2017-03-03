import React from 'react';

export default class Article extends React.Component{
  render(){
    const { title } = this.props;
    
    return(
      <div className="col-md-4">
        <h2>{title}</h2>
        <p>Some string with information. </p>
        <a className="btn btn-default" href="#"> More info </a>
      </div>
    );
  }
}


/* 
   or that. if use ^, then title sets in title of Article. Below we 
   set it in some variable.
   
export default class Article extends React.Component{
  render(){
    const title_value = this.props.title;
    
    return(
      <div className="col-md-4">
        <h2>{title_value}</h2>
        <p>Some string with information. </p>
        <a className="btn btn-default" href="#"> More info </a>
      </div>
    );
  }
}

*/