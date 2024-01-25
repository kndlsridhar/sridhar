import video from '../assets/img/supply-bg.mp4'

function Works(){
    return(
        <>
        <video class="supply__content-bg" muted="" autoplay="" playsinline="" loop="true" preload="auto">
                <source src={video} type="video/mp4"/>
                    </video>

        <div className='parent'>
            <div className='child'>
                <div className='card'>
                    <div className='card-body'>
                        Hello
                    </div>
                </div>
            </div>
            <div className='child'>
                
                <div className='card'>
                    <div className='card-body'>
                        Hello
                    </div>
                </div>
            </div>
            <div className='child'>
                
                <div className='card'>
                    <div className='card-body'>
                        Hello
                    </div>
                </div>
            </div>
            <div className='child'>
                
                <div className='card'>
                    <div className='card-body'>
                        Hello
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Works;