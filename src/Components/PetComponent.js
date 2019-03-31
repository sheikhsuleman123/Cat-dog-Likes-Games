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
   var result = null ;
   var disable = false;

    if(props.result !== ''){
     var resultStyle = null;
     if (props.result === 'LOSER'){
       resultStyle = {color: 'red'};
     } else {
       resultStyle = {color : 'green '}
     }
     result = <h2 style={resultStyle}>{props.result}</h2>
      disable = true;
    }
  return (
    <div style={style}>
    {result}
      <h3>{props.petName } likes: {props.likesCount}</h3>
      <img style={{height:300,weight:300}} src={props.petUrl} alt={props.petName + 'component'}/>
   <br />  
    <button style={btn} disabled={disable} value={props.petName} onClick={props.onLikedClick}>Like </button> 
    <button style={btn} disabled={disable} value={props.petName} onClick={props.onDisLikedClick}> DisLike </button>
   
    </div>
  )
  };   
export default PetComponent;