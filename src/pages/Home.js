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
          <p>I’m a senior studying Computer Science at Hunter College, based in New York. I've always had a knack for problem
            solving and math. My passion lies in computers and I’m inspired by how technology changes the world. Building software
            that can change people’s everyday lives for the better is something that I would like to be a part of.</p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/celesteurena/')} />
          <DescriptionIcon onClick={() => window.open('https://drive.google.com/file/d/1GqhmS3FrLpN8TvWh6FNjL3tZVVxyk9oC/view?usp=sharing')} />
          <EmailIcon onClick={() => window.open('mailto:celeste.urena03@gmail.com')} />
          <GithubIcon onClick={() => window.open('https://github.com/CelesTech03')} />
        </div>
      </div>

      <div className='projects'>
        <h1>My Projects</h1>
        <div className='projectList'>
          <a href='https://github.com/CelesTech03/Bookworm' target="_blank" alt="Bookworm Image">
            <ProjectItem name="Book Finder App" image={Bookworm} /></a>
          <a href='https://github.com/TienNguyen93/ems-frontend' target="_blank" alt="EMS Image">
            <ProjectItem name="Employee Management System" image={Ems} /></a>
          <a href='https://github.com/CelesTech03/Droplet' target="_blank" alt="Game Image">
            <ProjectItem name="Game Website" image={Droplet} /></a>
          <a href='https://github.com/CelesTech03/Restaurant-Website' target="_blank" alt="Restaurant Image">
            <ProjectItem name="Restaurant Website" image={Restaurant} /></a>
          <a href='https://github.com/CelesTech03/Twitter-Clone' target="_blank" alt="Twitter Image">
            <ProjectItem name="Twitter Clone App" image={Twitter} /></a>
          <a href='https://github.com/CelesTech03/Instagram-Clone' target="_blank" alt="Instagram Image">
            <ProjectItem name="Instagram Clone App" image={Instagram} /></a>
        </div>
      </div>
    </div>
  )
}

export default Home