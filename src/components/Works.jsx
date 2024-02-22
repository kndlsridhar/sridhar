import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import video from '../assets/img/supply-bg.mp4'

const projects = [
    { id: 1, name: 'Giripragati', category: 'USA',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
    { id: 2, name: 'Chandranna Pelli Kanuka', category: 'Canada',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
    { id: 3, name: 'Giribhumi', category: 'UK',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
    { id: 1, name: 'Giripragati', category: 'USA',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
    { id: 2, name: 'Chandranna Pelli Kanuka', category: 'Canada',img:require('../assets/img/disney-redesign.png'),description:'Test text' },
    { id: 3, name: 'Giribhumi', category: 'UK',img:require('../assets/img/disney-redesign.png'),description:'Test text' }
  ];


function Works(){
    return(
        <>
        <video class="supply__content-bg" muted="" autoplay="" playsinline="" loop="true" preload="auto">
                <source src={video} type="video/mp4"/>
                    </video>

        <div className='row works'>

            <div className='col-xl-12 col-12'>
                <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                    <li className='mx-2 text-white'>Web</li>
                    <li className='mx-2 text-white'>Mobile</li>
                    <li className='mx-2 text-white'>UX</li>
                    <li className='mx-2 text-white'>Dashboard</li>
                </ul>
            </div>

                {projects.map(function (data) {
                    return (
                        <div className='col-xl-4 col-12'>
                            <div className='card'>
                                <div className="card-header"><h4 className='card-title'>{data.name}</h4></div>
                                <div className='card-body'>
                                    <img src={data.img} alt='img' className='img-fluid' />
                                    {data.description}
                                </div>
                                <div className='card-footer'>
                                    <FontAwesomeIcon icon="fa-regular fa-user" className='icon' /> {data.category}
                                </div>
                            </div>
                        </div>
                    )
                })}




        </div>

        </>
    )
}

export default Works;