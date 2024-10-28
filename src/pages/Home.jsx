import Hero from "../components/Hero/Hero"
import SuperApps from "../components/SuperApps/SuperApps"
import Comp from "../components/Companies/Comp";
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