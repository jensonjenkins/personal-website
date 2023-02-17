import './hello.css'
import Stickman from './stickmanHI.jpg'

const HelloPage = () => {
    return (
        <>
            <div className='HelloContainer'>
                <div className='LeftH'>
                    <div className='tightBound'>
                        <h1 className='hellotext'>Hello!</h1>
                        <h1 className='nametext'>I'm Dave.</h1>
                        <div className='textBlock'>
                            <p>A student who is very open to learning new things. As a freshman pursuing a degree in Information Engineering, I am very keen and open to learning new technologies in the software development field. </p>

                        </div>
                        
                        <p className='scrollText'>SCROLL FOR MORE</p>
                        <div className='blueLine'/>
                    </div>

                </div>
                <div className='RightH'>
                    <img className='StickImg' src={Stickman}></img>
                </div>
                
            </div>

        </>
    )
}

export default HelloPage