import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsBoxArrowInRight, BsFillBriefcaseFill } from 'react-icons/bs';
//import Logo from '../../assets/imagens/logo-empreender.png';

import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar dark expand="md">
      <Link to="/">
        <NavbarBrand>
            <h1>Teste</h1>
        </NavbarBrand>
      </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <Link to="/dashboard">
              <NavbarText>
                <BsFillBriefcaseFill size={20} color="#FFF"/>
                  <span className="ms-2 me-5">Dashboard</span>
              </NavbarText>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;