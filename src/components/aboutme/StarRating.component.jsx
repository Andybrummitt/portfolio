import React from 'react';
import "./aboutme.styles.scss"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = () => {
  return (
    <div className="star-rating-container">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  )
}

export default StarRating;