import Bubble from "./components/Bubble"

const Projects = () => {
    return (
        <>
            <p className='font-bold text-3xl mb-3'>My Projects</p>

            <Bubble
                title='SRGAN'
                desc='A Super Resolution GAN based on the SRGAN architecture from the 2016 paper, 
            "Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network" by C. Ledig et al.'
                link="https://github.com/jensonjenkins/SRGAN"
                skills={["Tensorflow", "Python", "Machine Learning"]} />

            <Bubble
                title='transformer-chatbot'
                desc='An encoder-decoder transformer modelled chatbot based on the 2017 paper 
            "Attention is All You Need" by A. Vaswani et al. made in TensorFlow.'
                link="https://github.com/jensonjenkins/transformer-chatbot" 
                skills={["Tensorflow", "Python", "Machine Learning"]}/>

            <Bubble
                title='chatbot-web'
                desc="A full-stack web app to interact with the transformer-chatbot model."
                link="https://github.com/jensonjenkins/chatbot-web"
                skills={["Typescript", "Django", "Tensorflow", "Machine Learning"]} />

            <Bubble title='beam-visualizer' 
            desc='Force, moment & shear graph visualizer for a beam system.'
                link="https://github.com/jensonjenkins/beam-visualizer"
                skills={["Python"]} />

            <Bubble title='Sudoku' 
            desc='A version of the classic Sudoku game.'
                link="https://github.com/jensonjenkins/sudoku-game"
                skills={["Java", "Swing"]} />
{/* 

            <Bubble title='Sudoku' 
            desc='A version of the classic Sudoku game.'
                link="https://github.com/jensonjenkins/sudoku-game"
                skills={["Java", "Swing"]} />
            <Bubble title='Sudoku' 
            desc='A version of the classic Sudoku game.'
                link="https://github.com/jensonjenkins/sudoku-game"
                skills={["Java", "Swing"]} /> */}
        </>
    )
}

export default Projects