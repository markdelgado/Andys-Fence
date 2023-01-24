import { Button } from "react-bootstrap"
import Contact from "./Contact"
import './styles/About.css'
import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()

    return(
        <div className="about-container">
            <h1> About section</h1>
            <p>Andys Fence & Landscaping LLC is a professional and reliable company that provides a wide range of services to homeowners and businesses in Putnam, Westchester, and Dutchess County, New York.

                <br/>
                We specialize in fence installation and repair, including wood, vinyl, aluminum, and chain link options. We also offer landscaping services, including lawn maintenance, tree trimming, planting, and garden design. Additionally, we provide services such as hardscaping, outdoor lighting, and irrigation systems.
                <br/>
                Our team is dedicated to providing our customers with increased security, functionality, and beauty for their property. We understand the importance of creating a safe and inviting outdoor space, and we are committed to delivering high-quality work that exceeds your expectations. We take pride in our attention to detail and customer satisfaction, and we strive to make your vision a reality.
                <br/>
                Our skilled professionals have the experience and knowledge to handle any project, big or small. We use only the best materials and the most advanced techniques to ensure the longevity and durability of our work. With Andys Fence & Landscaping LLC, you can trust that your property is in good hands.
                <br/>
                Call us today to schedule a consultation and let us help you create the outdoor space of your dreams. We look forward to working with you!
            </p>
            <Button onClick={() => navigate('/contact')}>Contact us</Button>

        </div>
        )
        
    }

    export default About