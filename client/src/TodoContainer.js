import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import TagPanel from './components/TagPanel';
import TodoPanel from './components/TodoPanel';
import MenuPanel from './components/MenuPanel';

class TodoContainer extends Component {
    state = {
      tags: ['spanish', 'housework', 'social', 'fitness', 'web dev']
    };
  
    render() {
      return (
        <Grid fluid>
              <Row>
                <TagPanel tags={this.state.tags}/>
                <TodoPanel />
                <MenuPanel />
              </Row>
        </Grid>
      );
    }
  }
  
  export default TodoContainer;