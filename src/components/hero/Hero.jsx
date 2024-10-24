import './Hero.css'
import Button from "../../shared/Button"

const Hero = () => {
    return(
      <div className="HeroContainer">
        <div className='hero-content'>
          <div className="HeroText">
            <h1 className='heroTitle'>The Super<span>fast</span>  color Palette generator! </h1>
           <p className='Hero-texts'> Create the perfect palette or get inspired by   thousands of beautiful color schemes. </p>

            <div className="hero-buttons">
             {/* First button */}
             <Button bgColor="#0073ff" text="Start The Generator" />

             {/* Second button with transparent styling */}
             <button className="transparent-button">
               Explore Trending Palettes
             </button>
            </div>

            <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=9917&theme=light&period=monthly"
            alt="Product Hunt Badge"
            className="product-hunt-badge"/>
          </div>

          <div className='hero-image'>
            <img src="https://res.cloudinary.com/df5zacepv/image/upload/v1729591476/homepage_hero_palettes_widlyc.jpg" alt="" />
          </div>
        </div> 
      </div>
    )
  }
  
  export default Hero