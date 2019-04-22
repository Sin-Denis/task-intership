import React, {Component} from 'react';

import Heart from './icons/heart.svg';
import Bookmark from './icons/bookmark.svg';
import Share from './icons/share.svg';
import './slider-item.css';

export default class SliderItem extends Component {
  render() {
    let SliderItemClasses = "slider-item";
    if (this.props.position === -1) {
      SliderItemClasses += " slider-item-min slider-item-left";
    } else if (this.props.position === 1) {
      SliderItemClasses += " slider-item-min slider-item-right";
    }
    return (
      <div className={SliderItemClasses}>
        <img
          className="slider-item-img"
          src={this.props.url}
          alt="i"
        />
        <div className="slider-item-options">
          <img src={Heart} alt="heart"/>
          <img src={Bookmark} alt="bookmark"/>
          <img src={Share} alt="share"/>
        </div>
      </div>
    );
  }
}
