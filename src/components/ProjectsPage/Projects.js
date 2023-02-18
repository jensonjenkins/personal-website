
import './Projects.css'

const Projects =()=>{
    const AnimateOnScrollProj = (classArg) => {
        window.addEventListener('scroll', () => {
            const img = document.querySelector(classArg);
            const imgPosition = img.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            console.log(`imgPosition: ${imgPosition}, screenPosition: ${screenPosition}`);
            if (imgPosition < screenPosition) {
                img.classList.remove('hidden');
                img.classList.add('visible')
            }
        });
    }
    AnimateOnScrollProj(".ProjectsM")
    AnimateOnScrollProj(".ProjectsR")
    AnimateOnScrollProj(".TitleP")
    return(
        <>
            <div className='ContainerP'>
                <div className='ProjectsL'>
                    <div className='TitleP'>
                        <h1 className='ProjT'>Recent Projects</h1>
                    </div>
                    <a className='ProjectsM' href='https://github.com/jensonjenkins/finance-dummy' target="_blank">

                    </a>
                </div>
                <div className='ProjectsR'>
                    <a className='ProjectsRT' href='https://github.com/jensonjenkins/ma1008-miniproject' target="_blank">

                    </a>
                    <a className='ProjectsRB' >
                        
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects