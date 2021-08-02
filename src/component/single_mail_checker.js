import React from 'react';
import {Button, Card, Col, Container, FormControl, InputGroup} from "react-bootstrap";

function SingleMailChecker(props) {
    return (
        <React.Fragment>
            <Card>
                <br/>
        <Container>
            <div className="Row">
                <div className="col">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search Email"
                            aria-label="Search Email"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="info">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
            <div className="Row">
                <div className="col">
                    <div color={"red"} className="text-align-left text-color-red" >Email is Not Found</div>

                </div>
            </div>

        </Container>
                <br/>
            </Card>
        </React.Fragment>
    );
}

export default SingleMailChecker;
