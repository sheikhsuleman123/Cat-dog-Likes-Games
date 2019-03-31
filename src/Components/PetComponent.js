import React from 'react'

    var style = {
   display: 'inline-block',
   textAlign: 'center',
   marginLeft: 'auto',
   marginRight: 'auto',
 }
 var btn = {
   height: '25px',
   width: '70px',
   marginTop: '50px',
   marginLeft: '5px',
   marginRight: '5px',
 }

 function PetComponent(props) {
  return (
    <div style={style}>
      <h3>{props.petName } likes: {props.likesCount}</h3>
      <img style={{height:300,weight:300}} src={props.petUrl} alt={props.petName + 'component'}/>
   <br />  
    <button style={btn} value={props.petName} onClick={props.onLikedClick}>Like </button> 
    <button style={btn} value={props.petName} onClick={props.onDisLikedClick}> DisLike </button>
   
    </div>
  )
  };   
export default PetComponent;