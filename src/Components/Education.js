import React from 'react'
import EducationData from '../Data/Education.json'
import {Row, Card} from 'react-bootstrap';

const Education = () => {
    return (
        <Row className='school-container' id='schools'>
            <h3>Education</h3>
            <ul className='school-list'>
                {
                    EducationData.schools.map((school,i) => 
                        <li className='school-li' key={i}>                            
                            <Card className='school-card'>
                                <Card.Body>
                                    <Card.Title className='school-card-title'>{`${school.degree} in ${school.programName}`}</Card.Title>
                                    <Card.Subtitle className='school-card-subs'>{`${school.yearDate} | ${school.status}`}</Card.Subtitle>
                                    <Card.Text>{`${school.schoolName}, ${school.place}`}</Card.Text>
                                </Card.Body>
                            </Card>                                                            
                        </li>                   
                    )                    
                }
            </ul>
        </Row>
    )
}

export default Education;