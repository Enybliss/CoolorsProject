import Hero from "../components/hero/Hero.jsx"
import SuperApps from "../components/SuperApps/SuperApps.jsx"
import Comp from "../components/Companies/Comp.jsx";
import './Home.css'


const Home = ()=> {
    return(
      <div>
        <Hero /> 
        <SuperApps />
        <Comp />
        
      </div>
    )
  }
  
  export default Home