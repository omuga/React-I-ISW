import React from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';


const NavigationComponent = () => {

    return(
        <div>
            <Navbar color = "light" light expand="md"> 
                <NavbarBrand href="/"> Home </NavbarBrand>
                <Collapse navbar>
                    <Nav className = "mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/welcome">Welcome</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Tiendas
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href = "/tiendas">
                                Lista
                                </DropdownItem>
                                <DropdownItem href = "/tiendasForm">
                                Añadir
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationComponent;

