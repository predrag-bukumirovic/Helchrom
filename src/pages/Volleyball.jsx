import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import React from 'react'
import mainImg from "../assets/images/Blog/Odbojkabaner1.jpeg";
import mainImg1 from "../assets/images/Blog/odbojkabaner2.jpg";
import mainImg2 from "../assets/images/Blog/odbojkabaner3.jpeg";
import '../assets/scss/news-post.scss';

import OdbojkaSlikaG from "../assets/images/Blog/Odbojkagore.jpg";
import OdbojkaSlikaD from "../assets/images/Blog/Odbojkadole.png";

export default function Volleyball() {
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
            <h1 className='title'>WE SUPPORTED JUNIOR FEMALE VOLLEYBALL TEAM</h1> 
            <p style={{fontWeight: 'bold', fontSize: 18}}>As part of our vision, we strive to upgrade the quality of <br/>life for the coming generations.</p>
          </center>

          <div className='post'>
            <div>
              <p>This includes not only outcomes achieved from the core business point of view but also the responsibility toward kids and young people.</p>
              <p>This year we decided to support one amazing junior female volleyball team that participated in National Championship held in Belgrade, Serbia, in May. We are so proud of their team spirit, discipline, and results and we are sure there are many great things ahead of them.</p>
            </div>
            <div style={{width: '60%'}} className='post-img'>
              <img src={OdbojkaSlikaG} alt="Odbojka" />
            </div>
          </div>

          <p style={{marginTop: 30}}><b>Volleyball and engineering have many things in common, even though they might seem disparate.</b></p>

          <p>Volleyball and engineering have many things in common, even though they might seem disparate.</p>
          <p>While one revolves around teamwork and precision on the court, the other focuses on innovation, customer support, and problem-solving.</p>
          <p>However, both volleyball and engineering demand a strong foundation built upon <b>collaboration and teamwork.</b> Each team member has a crucial role in achieving seamless coordination, effective communication, and an unwavering commitment to shared outcomes.</p>
          <div className='post'>
            <div className='post-img'>
              <img src={OdbojkaSlikaD} alt="Odbojka" />
            </div>
            <div>
              <p>Furthermore, both volleyball and engineering require meticulous <b>attention to detail.</b> They demand a dedication to precision and a comprehensive understanding of the field, in order not to oversee the slightest detail.</p>
              <p><b>Adaptability and agility</b> represent other crucial common grounds between volleyball and engineering. In the dynamic environment of a volleyball game, players must constantly adjust their strategies to counter their opponents and overcome unforeseen obstacles. This ability to adapt under pressure resonates strongly with engineers, who must think fast and creatively to develop innovative solutions.</p>
            </div>
          </div>

          <p style={{marginTop: 50}}>Also, both volleyball and engineering celebrate the pursuit of excellence through <b>discipline and continuous improvement</b>. In volleyball, athletes tirelessly train to enhance their skills, technique, and physical abilities to perform at the highest level. Similarly, engineers constantly seek to push the boundaries of innovation, refining existing technologies and exploring new frontiers to improve the world for the coming generations.</p>
          <p>The similarities between volleyball and engineering highlight the shared core values and limitless capacity for collaboration, creativity, and innovation.</p>
          <p>We, at Helmchron, will continue to nurture talents and provide them with opportunities to thrive.</p>
        </div>
    </div>
  )
}
