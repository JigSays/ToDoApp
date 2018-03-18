import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import "./Tag.css";

const TagPanel = props => (
    <Col xs={12}>
        <input className="tag" type="checkbox" id={props.tag} name={props.tag}  value={props.tag} />
        <label for={props.tag} >{props.tag} </label>
    </Col>
);

export default TagPanel;