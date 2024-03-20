import React from 'react'

import mainImg from "../assets/images/Blog//Diversitybaner1.jpeg";
import mainImg1 from "../assets/images/Blog/Diversitybaner2.jpeg";
import mainImg2 from "../assets/images/Blog/Diversitybaner3.jpeg";
import '../assets/scss/news-post.scss';

import OdbojkaSlikaG from "../assets/images/Blog/Srceduga.jpeg";
import OdbojkaSlikaD from "../assets/images/Blog/Diversitydole.jpeg";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

export default function Sustainability() {
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
            <h1 style={{textTransform: 'inherit'}} className='title'>SUSTAINABILITY <br/> in Chemical and Pharmaceutical Industries</h1> 
            <p>Sustainability has become an essential driver for progress and competitiveness in the chemical and pharmaceutical industries.</p>
          </center>

          <div className='post'>
            <div style={{width: '100%'}}>
              <p>Historically, both industries have been pivotal in enhancing human well-being through the development of life-saving medicines, diagnostics, hygiene products, innovative materials and daily consumables. However, rapid industrialization and growth came at a cost, often leading to resource depletion and adverse environmental impacts. <br/> The increasing environmental consciousness and global movements, particularly in the 1980s, spearheaded the sustainability agenda. Since then, the chemical and pharmaceutical industries have been reevaluating their operations, focusing on reducing their ecological footprint and promoting sustainable development.</p>

              <p><b>Plastics</b></p>
              <p>The impact of synthetic polymers on our lives is indisputable. Plastic materials have revolutionized the manufacturing of medical devices, implants and consumables, production of vehicles, and even food packaging. However, their overuse has significant effects on the health of our environment and even our lives due to low degradability. <br/> Synthetic polymers are polluting water bodies and cropland and affect wildlife. Micro plastics are even found in human blood samples. Particular compounds, such as BPA and phthalates, are considered to be endocrine disruptors that interfere with the natural function of our endocrine system and can cause many chronic diseases.</p>

              <p><b>Engineering Solutions for Sustainability</b></p>
              <p>Our mission and vision are strongly linked to saving our planet for the coming generations and improving the health of the global population. We are focused on partnering with global leaders and contributing to projects related to manufacturing the highest quality biodegradable and compostable polymers from natural resources.</p>

              <ol>
                <li>Green Chemistry Principles</li>
                <p>Designing products and processes that minimize hazardous substances, waste, and energy use will emphasizes efficiency and safety and focus on renewable resources.</p>
                <li>Process Optimization</li>
                <p>Process engineering plays a crucial role in optimizing operations to reduce waste generation, improve energy efficiency, and maximize raw material utilization. Advanced process control technologies and data analytics aid in real-time monitoring and control for sustainable outcomes.</p>
                <li>Waste Management and Recycling</li>
                <p>Innovative waste treatment processes and recycling enable the reutilization of by-products, minimizing environmental impact and resource wastage.</p>
                <li>Alternative Energy Sources</li>
                <p>Transitioning to renewable energy sources such as solar, wind, or bioenergy for powering manufacturing facilities reduces the reliance on fossil fuels and decreases the carbon footprint.</p>
                <p>By integrating these engineering solutions, chemical and pharmaceutical industries can drive a paradigm shift towards a more sustainable and responsible future.</p>
              </ol>
            </div>
          </div>


          <div className="video-envi">
            <h3 className="title">PLASTICS - THEN AND NOW</h3>
            

            <iframe 
              className="video-yt"
              loading="lazy"
              src="https://www.youtube.com/embed/0leFkWYyv4c"
              title="Plastics - then and now I Helmchron I Chemistry Connects Us"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen/>
          </div>


          <div style={{marginTop: 50}}>
            <h4>References:</h4>

            <p>T.E. Graedel, B. Allenby, Industrial Ecology and Sustainable Engineering, P.H, 2009.</p>
            <p>K. Kuemmerer, Pharmaceuticals in the Environment, Springer, 2008.</p>
            <p>FC. Mihai, et al. Plastic pollution in marine and freshwater environments: abundance, sources, and mitigation, Elsevier, 2022, 241-274.</p>
            <p>A. Kulkarni, S.E. Miller, Analysis of pharmaceuticals in the environment, Contemporary Chemical Approaches for Green and Sustainable Drugs, Elsevier, 2022, 27-45.</p>
          </div>
        </div>
    </div>
  )
}
