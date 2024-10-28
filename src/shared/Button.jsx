import PropTypes from "prop-types";
import './Button.css'; // Ensure the path is correct based on your folder structure

const Button = ({
  bgColor = '#0073ff',
  text = 'Click me',
  children,
  borderRadius = '10px',
  width = 'auto',
  height = '46px', // Add px unit to the default height
  className = '',
}) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    border: `1px solid ${bgColor}`, // Border matches the background color
    borderRadius: borderRadius,
    width: width,
    height: height,
  };

  return (
    <button className={`custom-button ${className}`} style={buttonStyle}>
      {children || text} {/* Display children if passed, else display the text */}
    </button>
  );
};

// Define PropTypes to validate props passed to the component
Button.propTypes = {
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
  children: PropTypes.node, // Use PropTypes.node for children (includes any renderable content)
  className: PropTypes.string,
  height: PropTypes.string, // Expect height as a string, like '46px'
  text: PropTypes.string,
  width: PropTypes.string, // Expect width as a string, like 'auto' or '100%'
};

export default Button;
