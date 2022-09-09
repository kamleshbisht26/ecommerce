import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
   
<Navbar  style={{height:'80px' ,backgroundColor:'black', color:'white'}}>
<Container>

<Navbar.Brand>
    <a href='/' style={{color:'white'}}>Shopping Cart</a>

</Navbar.Brand>
<Navbar.Text className='mx-auto'>
    <FormControl type style={{width:'400px'}} className="mx-auto" placeholder='product search'/>
</Navbar.Text>

<Dropdown as={ButtonGroup}>
      <Button variant="success" className='shop-cart'> <FaShoppingCart/>10</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</Container>
</Navbar>
       
  
  )
}

export default Header