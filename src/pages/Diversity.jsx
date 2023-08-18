import React from 'react'

import mainImg from "../assets/images/Blog//Diversitybaner1.jpeg";
import mainImg1 from "../assets/images/Blog/Diversitybaner2.jpeg";
import mainImg2 from "../assets/images/Blog/Diversitybaner3.jpeg";
import '../assets/scss/news-post.scss';

import OdbojkaSlikaG from "../assets/images/Blog/Srceduga.jpeg";
import OdbojkaSlikaD from "../assets/images/Blog/Diversitydole.jpeg";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

export default function Diversity() {
  return (
     <div className='container-main'>

      {/* Slider start */}
        <CCarousel className="slider-main" controls transition="crossfade">
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg1} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg2} alt="slide 3" />
          </CCarouselItem>
        </CCarousel>
        <div className="box-img">
          <div>
            <img src={mainImg} alt="Helmchron Career - Slide 1" />
          </div>
          <div>
            <img src={mainImg1} alt="Helmchron Career - Slide 2" />
          </div>
          <div>
            <img src={mainImg2} alt="Helmchron Career - Slide 3" />
          </div>
        </div>
        {/* Slider end */}

        <div className='padding30'>
          <center>
            <h1 className='title'>A workplace where we feel included and heard</h1> 
            <p style={{fontWeight: 'bold', fontSize: 18}}>At Helmchron, we celebrate diversity as one of our core values and live by it each day.</p>
          </center>

          <div className='post'>
            <div style={{width: '100%'}}>
              <p>The concept of diversity in the workplace has gained significant traction over the past few decades as organizations recognize the immense value it brings. <br />
              The dawn of the civil rights movement in the 1960s marked a pivotal moment in history, sparking conversations around equality, justice, and social change. <br /> Organizations realized there is a huge need in embracing individuals from different backgrounds, perspectives, and experiences not only as a reflection of societal progress but also as their own contribution in creating a higher quality of life for the coming generations.</p>
            </div>
            <div style={{width: '40%'}} className='post-img'>
              <img src={OdbojkaSlikaG} alt="Odbojka" />
            </div>
          </div>

          <p>Today, we deeply understand the importance of Diversity and Inclusion.</p>

          <ul>
            <li><p><b>Innovation and Creativity:</b> Diversity encourages the collision of unique ideas, experiences, and mindsets, fostering innovation and creative problem-solving. Diverse teams bring together a wide range of skills and knowledge, leading to fresh insights and breakthrough solutions that homogenous groups may overlook.</p></li>
            <li><p><b>Enhanced Decision-Making:</b> Different perspectives challenge assumptions, mitigate bias, and promote thorough analysis, resulting in better-informed choices that consider multiple angles.</p></li>
            <li><p><b>Improved Customer Relations:</b> Embracing diversity enables organizations to connect with an increasingly diverse customer base effectively, gain valuable insights, build trust, and tailor their products or services to meet evolving needs.</p></li>
            <li><p><b>Increased Employee Engagement and Retention:</b> Inclusive workplaces foster a sense of belonging and pride. When individuals can bring their whole selves to work without fear of discrimination or prejudice, they are more likely to be engaged, motivated, and committed to their organization's success.</p></li>
            <li><p><b>Attracting Top Talent:</b> Cultures that live by diversity and inclusion send a powerful message to potential employees. The team that feels valued and appreciated will always spread the great word contributing to the company`s positive reputation.</p></li>
          </ul>

          <div className='post'>
            <div style={{width: '50%'}} className='post-img'>
              <img src={OdbojkaSlikaD} alt="Odbojka" />
            </div>
            <div style={{width: '100%'}}>
              <p>Embracing diversity is no longer just a moral imperative. It is a strategic advantage in a complex and ever-evolving business landscape.</p>
              <p>By celebrating the unique contributions of every of our team members, we believe we can realize our full potential, be innovative and supportive of our clients.</p>
            </div>
          </div>

          <div style={{marginTop: 50}}>
            <h4>References:</h4>

            <p><b>1.</b> Cox, T.H., Jr., & Blake, S. (1991). Managing Cultural Diversity: Implications for Organizational Competitiveness. The Executive, 5(3), 45-56.</p>
            <p><b>2.</b> Ely, R.J., & Thomas, D.A. (2001). Cultural Diversity at Work: The Effects of Diversity Perspectives on Work Group Processes and Outcomes. Administrative Science Quarterly, 46(2), 229-273.</p>
            <p><b>3.</b> Green, K.A., López, M., Wysocki, A., & Kepner, K. (2002). Diversity in the Workplace: Benefits, Challenges, and the Required Managerial Tools. University of Florida, Institute of Food and Agricultural Sciences.</p>
            <p><b>4.</b> Thomas, D.A. (2004). Diversity as Strategy. Harvard Business Review, 82(9), 98-108.</p>
            <p><b>5.</b> Hewlett, S.A., Marshall, M., & Sherbin, L. (2013). How Diversity Can Drive Innovation. Harvard Business Review, 91(12), 30-31.</p>
          </div>
        </div>
    </div>
  )
}
