import React from 'react';

var imageStyles = {
  width: '200px',
  height: '200px'
};

const Img = (props) => {
  return (
    <img src={props.dataImg} alt={props.alternate} style={imageStyles} onClick={()=>{
      props.handleClick(props.id)
    }} />
  );
};

export default Img;