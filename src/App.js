import React, { Component } from 'react';
import PetComponent from './Components/PetComponent';

class App extends Component {
 constructor(props){
   super(props);

   this.state = {
     catLikeCount : 0,
     dogLikeCount : 0,
     catResult: '',
     dogResult: ''
   };
  
   this.handleDisLikedClick = this.handleDisLikedClick.bind(this);
   this.handleLikedClick = this.handleLikedClick.bind(this);
   this.handleStrtOverbtn = this.handleStrtOverbtn.bind(this);
   this.handleShowWinnerbtn = this.handleShowWinnerbtn.bind(this);
 }

 handleLikedClick(e) {
  var petName = e.target.value;
  
   if(petName === 'Cat'){
     this.setState(function(prevState){
       return {
         catLikeCount : prevState.catLikeCount + 1,
         dogLikeCount : prevState.dogLikeCount
       };
     });
   }  else if (petName === 'Dog') {
     this.setState(function(preState){
       return {
         catLikeCount : preState.catLikeCount,
         dogLikeCount : preState.dogLikeCount + 1
       };
     });
   }
 }
 handleDisLikedClick(e){
  var petName = e.target.value;
  
  if(petName === 'Cat'){
    this.setState(function(prevState){
      return {
        catLikeCount : prevState.catLikeCount - 1,
        dogLikeCount : prevState.dogLikeCount
      };
    });
  }  else if (petName === 'Dog') {
    this.setState(function(preState){
      return {
        catLikeCount : preState.catLikeCount,
        dogLikeCount : preState.dogLikeCount - 1
      };
    });
  }
}
 
  handleShowWinnerbtn() {
 
 var catLikeCount = this.state.catLikeCount;
 var dogLikeCount = this.state.dogLikeCount;
 var catResult = 'TIE';
 var dogResult = 'TIE';
    if(catLikeCount > dogLikeCount) {
    catResult = 'WINNER';
    dogResult = 'LOSER';
  } else if (catLikeCount < dogLikeCount){
    catResult = 'LOSER';
    dogResult = 'WINNER';
    }
  }

  handleStrtOverbtn(){
    alert('hallo over again')
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
         likesCount = {this.state.catLikeCount}
         petUrl="http://4.bp.blogspot.com/-MzZCzWI_6Xc/UIUQp1qPfzI/AAAAAAAAHpA/OTwHCJSWFAY/s640/cats_animals_kittens_cat_kitten_cute_desktop_1680x1050_hd-wallpaper-753974.jpeg"
         onLikedClick = {this.handleLikedClick}
         onDisLikedClick = {this.handleDisLikedClick}
         />
        
        <PetComponent 
        petName="Dog" 
        likesCount = {this.state.dogLikeCount}
        petUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo60jqQ-RWki67TBFZ784DEqocUFtncruOCyikfm3XeX_kg0ve"
        onLikedClick = {this.handleLikedClick}
        onDisLikedClick={this.handleDisLikedClick}
        />
        <br />
      <button style={btn} onClick={this.handleShowWinnerbtn}> Show winner </button>
      <button style={btn} onClick={this.handleStrtOverbtn}> Start Over </button>

        </center>
      </div>
    );
  }
}

export default App;
