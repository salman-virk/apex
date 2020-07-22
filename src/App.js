import React from 'react';
import CatImagesClient from './catImagesClient';
import './App.css';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      currentIndex: -1,
      images: []
    };
   }

   fetchImages() {
    const client = new CatImagesClient;
    client.fetchImages().then(
      p => {
        this.setState((state) => {
          return {
            images: [
              ...state.images,
              p[0].url
            ],
            currentIndex: state.currentIndex + 1
          };
        });
      }
    );
   }

   componentWillMount() {
    this.fetchImages();
   }

   getPrevImage(currentIndex) {
    // if (currentIndex < this.state.images.length) {
     this.setState((state) => ({currentIndex: state.currentIndex - 1}));
    // }
  }

   getNextImage(currentIndex) {
     if ((currentIndex + 1) < this.state.images.length) {
      this.setState((state) => ({currentIndex: state.currentIndex + 1}));
     } else {
       this.fetchImages();
     }
   }

   render() {
     return (
      <div>
         {this.state.images.length ?
          <div>
            <img width="500" height="500" src={this.state.images[this.state.currentIndex]} />
            <button onClick={() => this.getNextImage(this.state.currentIndex)}>Next</button>
            {this.state.currentIndex > 0 &&
              <button onClick={() => this.getPrevImage(this.state.currentIndex)}>Previous</button>}
          </div> : ''}

      </div>
     );
   }
}

export default App;
