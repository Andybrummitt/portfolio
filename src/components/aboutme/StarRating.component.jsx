import React, { useEffect, useState } from 'react';
import "./aboutme.styles.scss"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from 'react';

const StarRating = ({delay, stars}) => {

  const myRef = useRef();
  const [ starRatingVisible, setStarRatingVisible ] = useState(false);

  useEffect(() => {
    //  DETECT WHEN USER SCROLLS TO COMPONENT AND SET STATE TO VISIBLE
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStarRatingVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, []);



  return (
    <div className={`star-rating-container ${starRatingVisible ? `animate-${stars}-stars` : ''}`} ref={myRef}>
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.1}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.2}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.3}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.4}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.5}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.6}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.7}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.8}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 0.9}s `}} />
      <FontAwesomeIcon icon={faStar} style={{ animationDelay: `${delay + 1}s `}} />
    </div>
  )
}

export default StarRating;