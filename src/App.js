import Navbar from './components/Navbar'
import HelloPage from './components/HelloPage/hello';
import Education from './components/EducationPage/Education';
import Projects from './components/ProjectsPage/Projects';
import StickConfused from './components/ProjectsPage/StickConfused.jpg'
import { Simulate } from 'react-dom/test-utils';
function App() {

  return (
    <div className="App">
      <Navbar />
      <section id='page1'>
        <HelloPage />
      </section>


      {/* <section id='page1'>
        <AboutMe />
      </section> */}

      <section id='page2'>
        <img className='temp404' src={StickConfused}></img>
        <h1>its empty, that's weird..</h1>
      </section>

      <section className='page3'>
        <Education />
      </section>

      <section className='page4'>
        <Projects />
      </section>


    </div>
  );
}

export default App;
