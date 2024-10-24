import './Comp.css';
import { FaDropbox, FaMicrosoft } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai"; // Add this line to import AiFillApple
import DreamWork from "../../../assets/images/dreamworks.svg"

const Comp = () => {
  return (
    <div>
      <div className="used-by-section">
        <h2 className="section-header">
          Used by 5+ million designers and by top companies
        </h2>

        <div className="icons-container">
          <AiFillApple className="company-icon" />

          <img src={DreamWork} alt="company 2" className='company-icon' />
          
          <FaMicrosoft className="company-icon" />
          <FaDropbox className="company-icon" />
          
          
          <FaMicrosoft className="company-icon" />
          <AiFillApple className="company-icon" />
          <AiFillApple className="company-icon" />
          <FaMicrosoft className="company-icon" />
          <AiFillApple className="company-icon" />
        </div>
      </div>
    </div>
  );
};

export default Comp;
