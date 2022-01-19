import React from 'react'
import {Row,Col,Card} from 'react-bootstrap';
import SkillsData from "../Data/Skills.json"
import "./Style.css"

const Profile = () => {
    const iconpath = '/images/skills-icons/'

    const techSkills = SkillsData.technicalSkills.map((ts,i) => 
        <Col md={12} key={i}>
            <Card  className='skill-card'>
                <Card.Header><h4>{ts.field}</h4></Card.Header>
                <ul className='techSkills-list'>
                {ts.skillset.map((askill,j) => 
                    <li key={j}>
                        <img src={`${iconpath}${askill.icon}`} alt={askill.skill} className='skillicon' />
                        <p>{askill.skill}</p>
                    </li>
                )}
                </ul>     
            </Card>
        </Col>            
    )

    return (
        <Row  className='techSkills-container' id='skills'> 
                <h3>Technical Skills</h3>
                {techSkills} 
        </Row>
    )
}

export default Profile;