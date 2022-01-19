import React from 'react'
import WorkData from '../Data/Work.json'
import {Row, Card} from 'react-bootstrap';

const Work = () => {
    return (
        <Row className='work-container' id='works'>
            <h3>Experience</h3>
            <ul>
                {
                    WorkData.workExperience.map((work,i) =>
                        <li className='work-li' key={i}>
                            <Card>
                            <Card.Header>
                                <Card.Title>{work.functionTitle}</Card.Title>
                                <Card.Subtitle>{`${work.compagnyName} | ${work.place} | ${work.workDate}`}</Card.Subtitle>
                            </Card.Header>
                            <Card.Body>
                                <Card.Subtitle>Tasks Description</Card.Subtitle>
                                <ul>
                                    {work.functionStack.map((task,j) =>
                                        <li key={j}>{task}</li>
                                    )}
                                </ul>
                            </Card.Body>
                            </Card>
                        </li>
                    )
                }
            </ul>
        </Row>
    )
}

export default Work;