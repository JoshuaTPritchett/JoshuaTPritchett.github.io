import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../css/Menu.css';

const Menu = () => {
  return (
    <ListGroup>
      <ListGroupItem>
        <a href="https://github.com/JoshuaTPritchett/website"> code </a>
      </ListGroupItem>
      <ListGroupItem>
        <a href="https://twitter.com/j_t_prime"> thoughts </a>
      </ListGroupItem>
      <ListGroupItem>
        <a href="https://www.goodreads.com/user/show/94599223-joshua-pritchett"> readings </a>
      </ListGroupItem>
      <ListGroupItem>
        <a href="https://github.com/JoshuaTPritchett/resume/blob/master/resume.md"> resume </a>
      </ListGroupItem>
      <ListGroupItem>
        <a href="mailto:jpritchett757@gmail.com"> contact </a>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Menu;
