import Navbar from './components/Navbar'


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <h1 className='hellotext'>Hello</h1>

      <section id='page1'>
        <h1 className='test1'>About Me</h1>

      </section>
              
      <section id='page2'>
        <h1 className='test2'>Experience</h1>
        <p>This is still my website</p>
      </section>

      <section id='page3'>
        <h1 className='test3'>Education</h1>
        <p>Nanyang Technological University</p>
        <p>Information Engineering and Media</p>
      </section>

      <section id='page4'>
        <h1 className='test4'>Projects</h1>
        <p>This is still my website</p>
      </section>


    </div>
  );
}

export default App;
