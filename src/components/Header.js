import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#'>
          <img
            alt=''
            src='/logo.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          ToDo App
        </Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>By Joel Watson</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
