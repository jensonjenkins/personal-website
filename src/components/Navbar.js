import {Link} from 'react-scroll'
// import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { toggle } from '../features/slice';
import { useSelector, useDispatch } from 'react-redux';


const Navbar = () => {
    const T = useSelector((state) => state.toggle.value)
    const dispatch = useDispatch()
    return (
        <header>
            <nav className = {`${T}`}>
                
                <Link to="page1" spy = {true} smooth={true} offset={50} duration ={500}
                >About Me</Link>
                <Link to="page2" spy = {true} smooth={true} offset={50} duration ={500}
                >Experience</Link>
                <Link to="page3" spy = {true} smooth={true} offset={50} duration ={500}
                >Career</Link>
                <Link to="page4" spy = {true} smooth={true} offset={50} duration ={500}
                >Projects</Link>

                <button className = {`nav-btn nav-close-btn `}  onClick ={()=>dispatch(toggle())}>
                    <FaTimes />
                </button>
            </nav>
            <button className = {`nav-btn nav-option-btn`}  onClick ={()=>dispatch(toggle())}>
                <FaBars/>
            </button>
        </header>
    )
}
export default Navbar;

