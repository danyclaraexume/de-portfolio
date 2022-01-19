import React from 'react'
import ProjectData from '../Data/Projects.json'
import {Row,Card} from 'react-bootstrap';
import './Style.css'

const Project = () => {
    return (
        <Row className='project-container' id='projects'>
            <h3>Projects</h3>
            <ul className='project-list'>
                {
                    ProjectData.projects.map( (prj,i) =>
                        <li key={i} className='project-li'>
                            <Card className='project-li-card'>
                                <Card.Header><Card.Title>{`${prj.name} | ${prj.realisationDate}`}</Card.Title></Card.Header>
                                <Card.Body>
                                    <Card.Subtitle>{prj.title}</Card.Subtitle>
                                    <Card.Text>Description</Card.Text>
                                    <Card.Text>{prj.description}</Card.Text>
                                    <Card.Text></Card.Text>
                                    <Card.Link href={prj.githublink}>Github Repository</Card.Link>
                                    <Card.Text>Stack: {prj.stack}</Card.Text>
                                </Card.Body>
                            </Card>
                        </li>
                    )
                }
            </ul>
        </Row>
    )
}

export default Project;