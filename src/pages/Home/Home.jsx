import AboutUs from "./HomeSection/AboutUs"
import Banner from "./HomeSection/Banner"
import ContactInfo from "./HomeSection/ContactInfo"
import Feature from "./HomeSection/Feature"
import Products from "./HomeSection/Products"
import Services from "./HomeSection/Services"
import Team from "./HomeSection/Team"
import Testimonial from "./HomeSection/Testimonial"

function Home() {
  return (
    <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Services></Services>
        <ContactInfo></ContactInfo>
        <Products></Products>
        <Team></Team>
        <Feature></Feature>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home