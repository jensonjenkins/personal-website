import Bubble from "./components/Bubble"

const Projects = () => {
    return (
        <>
            <p className='font-bold text-3xl mb-3'>My Projects</p>

            <Bubble
                title='SRGAN'
                desc='An image enhancing GAN based on the SRGAN architecture from the paper, 
            "Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network" by C. Ledig et al.'
                link="https://github.com/jensonjenkins/SRGAN"
                skills={["Tensorflow", "Python", "Machine Learning"]} />

            <Bubble
                title='transformer-chatbot'
                desc='An encoder-decoder transformer modelled chatbot based on the 2017 paper 
            "Attention is All You Need" by A. Vaswani et al. made in TensorFlow.'
                link="https://github.com/jensonjenkins/transformer-chatbot" 
                skills={["Tensorflow", "Docker", "Python", "Machine Learning"]}/>

            <Bubble
                title='chatbot-web'
                desc="A full-stack web app to interact with the transformer-chatbot model."
                link="https://github.com/jensonjenkins/chatbot-web"
                skills={["Typescript", "Django", "Docker", "Tensorflow", "Machine Learning"]} />

            <Bubble title='beam-visualizer' 
            desc='Force & moment graph visualizer for a beam system.'
                link="https://github.com/jensonjenkins/beam-visualizer"
                skills={["Python"]} />

            <Bubble title='Sudoku' 
            desc='A version of the classic Sudoku game.'
                link="https://github.com/jensonjenkins/sudoku-game"
                skills={["Java", "Swing"]} />

        </>
    )
}

export default Projects