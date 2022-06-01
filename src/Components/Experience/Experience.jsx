import React, { useContext } from 'react'
import { ThemeContext } from '../../Context';
import './Experience.css'

function Experience() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle" style={{color: darkMode ? 'black' : ''}}>3+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className='achievement'>
        <div className='circle' style={{color: darkMode ? 'black' : ''}}>10+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className='achievement'>
        <div className='circle' style={{color: darkMode ? 'black' : ''}}>2</div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  )
}

export default Experience