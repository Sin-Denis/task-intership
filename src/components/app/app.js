import React, {Component} from 'react'
import './app.css'

import SliderItem from '../slider-item';
import Button from '../button';

export default class App extends Component {

  state = {
    idx: 0,
    pictures: []
  };

  getPicture = async (place) => {
    const url = 'https://picsum.photos/419/172/?random';
    let newPictures = [];
    for (let i = 0; i < 10; ++i) {
      let res = await fetch(url);
      let blobObj = await res.blob();
      let resURL =  await URL.createObjectURL(blobObj);
      newPictures.push(resURL);
    }
    this.setState(({idx, pictures}) => {
      if (place === 1) {
        return {
          pictures: [...pictures, ...newPictures]
        };
      } else {
        return {
          idx: 9,
          pictures: [...newPictures, ...pictures]
        };
      }

    });
  };

  componentWillMount() {
    this.getPicture(1);
  }

  next = () => {
    if (this.state.idx + 2 === this.state.pictures.length - 1)
      this.getPicture(1);
    this.setState(({idx}) => {
      const newIdx = idx + 1;
      return {
        idx: newIdx
      };
    });
  };

  prev = () => {
    if (this.state.idx === 0)
      this.getPicture(-1);
    this.setState(({idx}) => {
      const newIdx = idx - 1;
      return {
        idx: newIdx
      };
    });
  };

  render() {
    return (
      <div className="app">
        <div className="slider-body">
          <SliderItem
            position={-1}
            url={this.state.pictures[this.state.idx]}
          />
          <SliderItem
            url={this.state.pictures[this.state.idx + 1]}
          />
          <SliderItem
            position={1}
            url={this.state.pictures[this.state.idx + 2]}
          />
        </div>
        <div className="slider-buttons">
          <Button
            label="prev"
            btnClick={this.prev}
          />
          <Button
            label="next"
            btnClick={this.next}
          />
        </div>
      </div>
    );
  }
};
