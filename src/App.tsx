import React from "react";
import "./App.css";
import yippee from './yippee.jpg'; // with import
import {Button, Col, Container, Row} from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript heading
            </header>
            <h1>This is a heading</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Matthew Frizzle Hello World
            </p>
            <img src={yippee} alt="A picture of a poorly drawn cat" />
            Ordered list:
            <ol>
                <li>Making</li>
                <li>A</li>
                <li>List</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
