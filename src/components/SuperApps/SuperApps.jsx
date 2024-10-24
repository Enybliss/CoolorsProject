import './SuperApps.css';
import Card from "../../shared/Card";
import { AiFillApple } from "react-icons/ai"; // Import iOS icon
import { SiAndroid, SiFigma, SiGooglechrome, SiAdobe } from "react-icons/si"; // Import additional icons

const SuperApps = () => {
    return (
      <div>
        <div className="card-section">
          <div className="card-container">
            <Card
              image={<AiFillApple size={50} color="black" />}
              text="iOS App"
              description="Create, browse, and save palettes on the go."
              hoverText="View on the App Store"
              hoverBgColor="#87CEEB" // Light blue-green background on hover
              bgColor="#f7f7f8" 
            />
            <Card
              image={<SiAndroid size={50} color="black" />}
              text="Android App"
              description="Explore palettes with our Android app."
              hoverText="View on Google Play"
              hoverBgColor="#14B789" // Light cyan hover color
              bgColor="#f7f7f8" 
            />
            <Card
              image={<SiFigma size={50} color="black" />}
              text="Figma Plugin"
              description="Design and save palettes directly in Figma."
              hoverText="Get the Figma Plugin"
              hoverBgColor="#E50087" // Light gray hover color
              bgColor="#f7f7f8" 
            />
            <Card
              image={<SiGooglechrome size={50} color="black" />}
              text="Chrome Extension"
              description="Access palettes instantly with our Chrome extension."
              hoverText="Add to Chrome"
              hoverBgColor="#802FDE" // Light blue hover color
              bgColor="#f7f7f8" 
            />
            <Card
              image={<SiAdobe size={50} color="black" />}
              text="Adobe Extension"
              description="Enhance your Adobe experience with color palettes."
              hoverText="Install Adobe Extension"
              hoverBgColor="#DAAB00" // Light red hover color
              newLabel="New" // Only adding "New" for Adobe Extension
              bgColor="#f7f7f8" 
            />
          </div>
        </div>
      </div>
    );
}

export default SuperApps;
