import './Education.css'
import StickManE from './StickmanE.jpg'


const Education = () => {
    const AnimateOnScrollEdu = (classArg, hidden, visible) => {
        window.addEventListener('scroll', () => {
            const img = document.querySelector(classArg);
            const imgPosition = img.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            console.log(`imgPosition: ${imgPosition}, screenPosition: ${screenPosition}`);
            if (imgPosition < screenPosition) {
                img.classList.remove(hidden);
                img.classList.add(visible)
            }
        });
    }
    AnimateOnScrollEdu(".TitleE", 'hidden', 'visible')
    AnimateOnScrollEdu(".Schools", 'hidden','visible')
    AnimateOnScrollEdu(".EduImage", 'hiddenImg','visibleImg')
    return (
        <>
            <div className='ContainerE'>
                <div className='EducationL'>
                    <div className='TitleCont'>
                        <h1 className='TitleE'>Education</h1>
                    </div>

                    <div className='StickE'>
                        <img className='EduImage' src={StickManE}></img>
                    </div>
                </div>
                <div className='EducationR'>
                    <div className='Schools hidden'>
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