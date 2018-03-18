import React from "react";
import "./MenuPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from "./Icon";

const iconArr = [0,1,2,3,4];

const MenuPanel = props => (
    <Col xs={1} className="menu-panel">
    {iconArr.map(e=> <Icon />)}
    </Col>
);

export default MenuPanel;