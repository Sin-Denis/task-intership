import React, {Component} from 'react';

import Heart from './icons/heart.svg';
import Bookmark from './icons/bookmark.svg';
import Share from './icons/share.svg';
import './slider-item.css';

export default class SliderItem extends Component {
  render() {
    return (
      <div className="slider-item">
        <img
          className="slider-item-img"
          src={this.props.url}
          alt="i"/>
        <div className="slider-item-options">
          <img src={Heart} alt="heart"/>
          <img src={Bookmark} alt="bookmark"/>
          <img src={Share} alt="share"/>
        </div>
      </div>
    );
  }
}
