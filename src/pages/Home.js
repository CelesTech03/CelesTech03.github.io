import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import DescriptionIcon from '@material-ui/icons/Description'
import '../styles/Home.css'
import ProjectItem from '../components/ProjectItem'
import Bookworm from '../images/bookworm.png'

function Home() {
  return (
    <div className='home'>

      <div className='about'>
        <h2>Hi, I'm Celeste Ureña</h2>
        <div className='prompt'>
          <p>Aspring Software Engineer</p>
          <LinkedInIcon />
          <DescriptionIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>

      <div className='projects'>
        <h1>My Personal Projects</h1>
        <div className='projectList'>
          <ProjectItem name="Book Finder App" image={Bookworm} />
        </div>
      </div>
    </div>
  )
}

export default Home