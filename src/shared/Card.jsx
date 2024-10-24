import PropTypes from "prop-types";
import { useState } from "react";
import "./Card.css"; // Import card styles

const Card = ({ image, text, description, hoverText, hoverBgColor, newLabel, bgColor, size }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine the size class based on the size prop
  const sizeClass = size === 'small' ? 'small' : size === 'large' ? 'large' : 'medium';

  return (
    <div
      className={`card ${sizeClass}`} // Apply the size class
      style={{ backgroundColor: isHovered ? hoverBgColor : bgColor }} // Use bgColor prop
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-content">
        {newLabel && <span className="new-label">{newLabel}</span>}
        
        {!isHovered ? (
          <>
            <div className="card-image">{image}</div>
            <h3 className="card-title">{text}</h3>
            <p className="card-description">{description}</p>
          </>
        ) : (
          <div className="card-hover-content">
            <p>{hoverText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.any,
  hoverBgColor: PropTypes.any,
  hoverText: PropTypes.any,
  image: PropTypes.any,
  text: PropTypes.any,
  newLabel: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Specify allowed sizes
};

export default Card;
