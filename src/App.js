import React, { Component } from 'react';
import PetComponent from './Components/PetComponent';
import axios from 'axios';


  var API_KEY = '123456789';
  
  var CAT_URL = 'http://localhost:63000/cat/?api_key=123456789';
  var DOG_URL = 'http://localhost:63000/dog/?api_key=123456789'


class App extends Component {
 constructor(props){
   super(props);

   this.state = {
     cat : {likesCount: 0 , result:'', imageUrl: ''},
     dog : {likesCount: 0 , result:'', imageUrl: ''}
     
   };
  
   this.handleDisLikedClick = this.handleDisLikedClick.bind(this);
   this.handleLikedClick = this.handleLikedClick.bind(this);
   this.handleStrtOverbtn = this.handleStrtOverbtn.bind(this);
   this.handleShowWinnerbtn = this.handleShowWinnerbtn.bind(this);
 }

  fetchCatImage () {
    axios.get(CAT_URL)
    .then(function(resp){
      var imageUrl = resp.data.imageUrl;

      this.setState(function(prevState) {
        return {
            cat: {likesCount: prevState.cat.likesCount, result: prevState.cat.result, imageUrl: imageUrl }
        };
      });
    });
  }
 
  fetchCatImage () {
    axios.get(CAT_URL)
    .then(function(resp){
      var imageUrl = resp.data.imageUrl;

      this.setState(function(prevState) {
        return {
            cat: {likesCount: prevState.cat.likesCount, result: prevState.cat.result, imageUrl: imageUrl }
        };
      });
    });
  }
 
 handleLikedClick(e) {
  var petName = e.target.value;
  
   if(petName === 'Cat'){
     this.setState(function(prevState){
       return {
         cat: {likesCount: prevState.cat.likesCount+1, result: prevState.cat.result }
       };
     });
   }  else if (petName === 'Dog') {
     this.setState(function(prevState){
       return {
        dog: {likesCount: prevState.dog.likesCount+1, result: prevState.dog.result }
       };
     });
   }
 }
 handleDisLikedClick(e){
  var petName = e.target.value;
  
  if(petName === 'Cat'){
    this.setState(function(prevState){
      return {
        cat: {likesCount: prevState.cat.likesCount - 1, result: prevState.cat.result }     };
    });
  }  else if (petName === 'Dog') {
    this.setState(function(prevState){
      return {
        dog: {likesCount: prevState.dog.likesCount - 1, result: prevState.dog.result }   };
    });
  }
}
 
  handleShowWinnerbtn() {
 
 var catLikeCount = this.state.cat.likesCount;
 var dogLikeCount = this.state.dog.likesCount;
 
 var catResult = 'TIE';
 var dogResult = 'TIE';
    if(catLikeCount > dogLikeCount) {
    catResult = 'WINNER';
    dogResult = 'LOSER';
  } else if (catLikeCount < dogLikeCount){
    catResult = 'LOSER';
    dogResult = 'WINNER';
    }
  
    this.setState(function(prevState) {
      return {
        cat : {likesCount: prevState.cat.likesCount, result: catResult },
      
        dog : {likesCount: prevState.dog.likesCount, result: dogResult }
      }
    })

  }

  handleStrtOverbtn(){
    this.setState({
      cat : {likesCount: 0 , result:''},
      dog : {likesCount: 0 , result:''}
     
    })
  }

  render() {

    var style ={
      textAlign: 'center',
      fontSize: '2em',
      color: 'purple'
    }
    var btn = {
      marginTop: '30px',
      marginRight: '20px',
      height: '30px',
      width: '100px'
    }
    
    return (
      <div>
        <h1 style={style}>
          Welcome to Cat and Dog Cuteness Fight Like and Dislike Game
        </h1>
        <center>
        <PetComponent
         petName="Cat" 
         result = {this.state.cat.result}
         likesCount = {this.state.cat.likesCount}
         petUrl={this.state.cat.imageUrl}
         onLikedClick = {this.handleLikedClick}
         onDisLikedClick = {this.handleDisLikedClick}
         />
        
        <PetComponent 
        petName="Dog" 
        result = {this.state.dog.result}
        likesCount = {this.state.dog.likesCount}
        petUrl={this.state.dog.imageUrl}
        onLikedClick = {this.handleLikedClick}
        onDisLikedClick={this.handleDisLikedClick}
        />
        <br />
     {!this.state.dog.result &&
     <button style={btn} onClick={this.handleShowWinnerbtn}> Show winner </button> }
      <button style={btn} onClick={this.handleStrtOverbtn}> Start Over </button>

        </center>
      </div>
    );
  }
}

export default App;
