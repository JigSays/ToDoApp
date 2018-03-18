import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Tag from './Tag';
import "./TagPanel.css";

const TagPanel = props => (
    <Col xs={2} className="tag-panel">
        {props.tags.map(e => <Tag tag={e}/>)}
    </Col>
);

export default TagPanel;