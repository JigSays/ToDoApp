import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import TagPanel from './components/TagPanel';
import TodoPanel from './components/TodoPanel';
import MenuPanel from './components/MenuPanel';

class TodoContainer extends Component {
    state = {
    };
  
    render() {
      return (
        <Grid fluid>
              <Row>
                <TagPanel />
                <TodoPanel />
                <MenuPanel />
              </Row>
        </Grid>
      );
    }
  }
  
  export default TodoContainer;