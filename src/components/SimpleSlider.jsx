import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//import disney from '../assets/img/disney-redesign.png';

const projects = [
  { id: 1, name: 'AP Tribes', category: 'USA',img:require('../assets/img/AP-Tribes.png'),description:'Test text' },
  { id: 2, name: 'Chandranna Pelli Kanuka', category: 'Canada',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
  { id: 3, name: 'Giribhumi', category: 'UK',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
  { id: 1, name: 'Giripragati', category: 'USA',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
  { id: 2, name: 'Chandranna Pelli Kanuka', category: 'Canada',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
  { id: 3, name: 'Giribhumi', category: 'UK',img:require('../assets/img/disney-redesign.png'),description:'Test text' }
];
const SimpleSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
    };
  
    return (
        <>
        
        <ul className='list-unstyled work-list'>
        <Slider {...settings}>
        {projects.map(function (data) {
                    return (
                            <li>
                            <h6>{data.name}</h6>
                               <p>{data.description}</p>
                               <img src={data.img} alt='img' className='img-fluid' />
                            </li>
                            
                    )
                  })}

                            {/* <li>
                            <h6>Disney + Hostar</h6>
                               <p>Designing websites with speed + various style direction for non-profits, small businesses, edutech, and startups since 2018.</p>
                                <img src={disney} className='img-fluid' alt=''/>
                            </li>

                            <li>
                            <h6>Disney + Hostar</h6>
                               <p>Designing websites with speed + various style direction for non-profits, small businesses, edutech, and startups since 2018.</p>
                                <img src={disney} className='img-fluid' alt=''/>
                            </li>

                            <li>
                            <h6>Giripragati</h6>
                              <p>Tribal welfare department of andhra pradesh</p>
                                <img src={disney} className='img-fluid' alt=''/>
                            </li> */}
                            
      </Slider>
                        </ul>
                        
                        </>

      
    );
  };
  
  export default SimpleSlider