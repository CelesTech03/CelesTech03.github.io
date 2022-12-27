import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import DescriptionIcon from '@material-ui/icons/Description'
import '../styles/Home.css'
import ProjectItem from '../components/ProjectItem'
import Bookworm from '../images/bookworm.png'
import Ems from '../images/EMS.png'
import Droplet from '../images/droplet.png'
import Restaurant from '../images/restaurant.png'
import Twitter from '../images/twitter.png'
import Instagram from '../images/instagram.png'

function Home() {
  return (
    <div className='home'>

      <div className='about'>
        <h2>Hi, I'm Celeste Ureña</h2>
        <div className='prompt'>
          <p>Aspring Software Engineer</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/celesteurena/')}/>
          <DescriptionIcon onClick={() => window.open('https://drive.google.com/file/d/1GqhmS3FrLpN8TvWh6FNjL3tZVVxyk9oC/view?usp=sharing')}/>
          <EmailIcon onClick={() => window.open('mailto:celeste.urena03@gmail.com')}/>
          <GithubIcon onClick={() => window.open('https://github.com/CelesTech03')}/>
        </div>
      </div>

      <div className='projects'>
        <h1>My Projects</h1>
        <div className='projectList'>
          <ProjectItem name="Book Finder App" image={Bookworm} />
          <ProjectItem name="Employee Management System" image={Ems} />
          <ProjectItem name="Game Website" image={Droplet} />
          <ProjectItem name="Restaurant Website" image={Restaurant} />
          <ProjectItem name="Twitter Clone App" image={Twitter} />
          <ProjectItem name="Instagram Clone App" image={Instagram} />
        </div>
      </div>
    </div>
  )
}

export default Home