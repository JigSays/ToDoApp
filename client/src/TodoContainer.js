import React, {Component} from "react";
import TagPanel from './components/TagPanel';
import TodoPanel from './components/TodoPanel';
import MenuPanel from './components/MenuPanel';

class TodoContainer extends Component {
    state = {
    };
  
    render() {
      return (
        <div>
                <TagPanel />
                <TodoPanel />
                <MenuPanel />
        </div>
      );
    }
  }
  
  export default TodoContainer;