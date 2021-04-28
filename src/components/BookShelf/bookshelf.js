import React from 'react';
import { Col, Row, Container } from '../Grid/index';
import { List, ListItem } from "../List/index";

const BookShelf = () => {
    return(

        <Row>
            <Container>
                {
                    <List>
                        <ListItem >
                            <Row>
                                <Col size='4'>
                                    <button>Delete</button>
                                </Col>
                            </Row>
                        </ListItem>
                    </List>
                }

            </Container>
        </Row>
    );
}

export default BookShelf;