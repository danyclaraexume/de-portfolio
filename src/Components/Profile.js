import React from 'react'
import {Row,Col} from 'react-bootstrap';
import EmailIcon from "../Images/email-icon.png"
import LinkedInIcon from "../Images/linkedin-icon.png"
import GithubIcon from "../Images/github-icon.png"
import CvIcon from '../Images/cv-icon.png'
import Photo from '../Images/profile-img.jpeg'
import "./Style.css"

const Profile = (props) => {
    const ProfileData = props.profileData;
    const langIcon = '/images/'
    return (
        <Row className='profile-container'  id='home'>
            <Col lg={3} className='profilePic-container'>
                <img className='profilePic' src={Photo} alt="Dany Exume Profile"/>
            </Col>
            
            <Col lg={9} className='profileDetails-container'>
                <Row>
                    <Col lg={6} className='aboutMe-container'>
                        <Row className='favQuote'>
                            <p><span className='theQuote'>{ProfileData.myFavQuote} </span>--Unknown</p>
                        </Row>
                        <Row className='aboutMeP'>
                            {ProfileData.aboutMe}
                        </Row>
                    </Col> 
                    <Col lg={6}>
                        <Row className='aboutMe-lists'>                   
                            <Row className='languages-col'>
                                <h4>Languages</h4> 
                                <ul className='languages-list'>
                                    {ProfileData.langages.map((language,i) =>
                                        <li key={i}><img src={`${langIcon}${language.icon}`} alt={language.langage} /> {language.level} </li>
                                    )}
                                </ul>                   
                            </Row>
                            <Row className='softskills-col'>
                                <h4>Strengths</h4>
                                <ul className='softskills-list'>
                                    {ProfileData.softSkills.map((skill,i) =>
                                        <li key={i}>{skill}</li>
                                    )}
                                </ul>                        
                            </Row>
                        </Row> 
                    </Col>                  
                </Row>
                
                <Row className='contactMe'>
                    <ul className='contact-list'>
                        <li className='contact-list-brand'>Contact Me</li>
                        <li>
                            <a href={`mailto:$ProfileData.personal.emailAdress`} >
                                <img className='contact-icon' src={EmailIcon} alt="Email-Icon" />
                            </a>
                        </li>
                        <li>
                            <a href={ProfileData.personal.linkedIn} target = "_blank" rel = "noopener noreferrer">
                                <img className='contact-icon' src={LinkedInIcon} alt="LinkedIn-Icon" />
                            </a>
                        </li>
                        <li>
                            <a href={ProfileData.personal.github} target = "_blank" rel = "noopener noreferrer">
                                <img className='contact-icon' src={GithubIcon} alt="Github-Icon" />
                            </a>
                        </li>
                        <li>
                            <a href={ProfileData.personal.github} target = "_blank" rel = "noopener noreferrer">
                                <img className='contact-icon' src={CvIcon} alt="Github-Icon" />
                            </a>                                
                        </li>
                    </ul> 
                </Row>                                  
            </Col>
           
        </Row>
    )
}

export default Profile;