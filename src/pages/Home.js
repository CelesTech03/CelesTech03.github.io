import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
        <h2>Hi, I'm Celeste Ureña</h2>
        <div className='prompt'>
            <p>Aspring Software Engineer</p>
            <LinkedInIcon/>
            <EmailIcon/>
            <GithubIcon/>
        </div>
        </div>
    </div>
  )
}

export default Home