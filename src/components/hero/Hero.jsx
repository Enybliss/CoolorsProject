import MyImage from '../../assets/images/homepage_hero_palettes.png'
import CoolorsImage from  '../../assets/images/coolorsImage.png'
import './Hero.css'

const Hero = () => {
    return(
      <div className="HeroContainer">
        <div className="HeroText">
            <h1>The Super fast color Palette</h1>
            <p className='texts'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint debitis quaerat omnis consequatur similique iste officia</p>

            <div className='btns'>
              <button className='Generator'>Start the generator</button>
             <button className='Explore'>Expore trending Palettes</button>

             <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=9917&theme=light&period=monthly" alt="" />
            </div>
           
          
        </div>

        <div className='ParentsImage'>
          <div className="HeroImage">
            <img src={MyImage} alt="" />
          </div>
          <div className='ChildImage'>
            <img src={CoolorsImage} alt="" />
          </div>
        
        </div>
      </div>
    )
  }
  
  export default Hero