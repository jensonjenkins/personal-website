import './Education.css'
import StickManE from './StickmanE.jpg'


const Education = () => {
    return (
        <>
            <div className='ContainerE'>
                <div className='EducationL'>
                    <div className='TitleCont'>
                        <h1 className='TitleE'>Education</h1>
                    </div>

                    <div className='StickE'>
                        <img className='EduImage'src={StickManE}></img>
                    </div>
                </div>
                <div className='EducationR'>
                    <div className='Schools'>
                        <a className='StLoren' href='https://www.santa-laurensia.com/' target="_blank">
                        </a>

                        <a className='NTU' href='https://www.ntu.edu.sg/' target="_blank">
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education