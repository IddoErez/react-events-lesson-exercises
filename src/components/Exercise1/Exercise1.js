import React, { Component } from 'react';

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://ripeme.com/wp-content/uploads/RV-10047-RIPE-ORGANIC-ORGANIC-LETTUCE-ROMAINE.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
      currentImg: 0
    }
  }
  shiftImageBack = () => {
   
    this.setState({
    currentImg: this.state.currentImg - 1
     // this should reduce currentImg by 1
  })
 
}
  shiftImageForward = () => {
    this.setState({
      currentImg: this.state.currentImg +1
    })
    
    // shiftImageForward - this should increase currentImg by 1
  }

  render() {
    const {images, currentImg} = this.state
    return (
   <div>   
      <button className="back" onClick={this.shiftImageBack}>Previous</button>
      <span><img key={Math.random()} src={images[currentImg]}></img></span>
      <button className="forward" onClick={this.shiftImageForward} >Next</button>
    </div>
  );
  }
}

export default Exercise1;
