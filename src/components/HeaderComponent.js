import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({ username: this.username.value, password: this.password.value });
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
    }

    handleGoogleLogin(event) {
        this.toggleModal();
        this.props.googleLogin();
        event.preventDefault();
    }

    handleFacebookLogin(event) {
        this.toggleModal();
        this.props.facebookLogin();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar>
                    <div className="container d-flex justify-content-between align-items-center">
                        <NavbarBrand>
                            <div className="logo">
                                <a href="/"><img src="assets/images/logo.png" height="150" width="150"
                                    alt="Failed to load" className="img-fluid" /></a>
                            </div>
                        </NavbarBrand>
                        <span className="fa fa-bars fa-lg" onClick={this.toggleNav}>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"></span> Home
                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/dashboard">
                                            <span className="fa fa-dashboard fa-lg"></span> Dashboard
                                      </NavLink>
                                    </NavItem>
                                    <NavLink className="nav-link" to="/products">
                                        <span className="fa fa-shopping-basket fa-lg"></span> Products
                                      </NavLink>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/advisory">
                                            <span className="fa fa-question-circle fa-lg"></span> Advisory
                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg"></span> About Us
                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg"></span> Contact Us
                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/register">
                                            <span className="fa fa-user-plus fa-lg"></span> Register
                                      </NavLink>

                                    </NavItem>
                                    <p></p>
                                    <NavItem>
                                        {!this.props.auth.isAuthenticated ?
                                            <Button outline onClick={this.toggleModal} style={{ color: 'white', backgroundColor: "#4682B4" }}>
                                                <span className="fa fa-sign-in fa-lg" style={{ color: 'white', backgroundColor: "#4682B4" }}></span> Login
                                              {this.props.auth.isLoading ?
                                                    <span className="fa fa-spinner fa-spin fa-3x fa-fw"></span>
                                                    : null
                                                }
                                            </Button>
                                            :
                                            <div>
                                                <Typography variant="h6" component="h6" style={{ color: 'black', fontWeight: 'bold' }}>
                                                    {this.props.auth.user.username}
                                                </Typography>
                                                <Button outline onClick={this.handleLogout} style={{ color: 'white', backgroundColor: "#4682B4" }}>
                                                    <span className="fa fa-sign-out fa-lg" style={{ color: 'white', backgroundColor: "#4682B4" }}></span> Logout
                                              {this.props.auth.isLoading ?
                                                        <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                        : null
                                                    }
                                                </Button>
                                            </div>
                                        }

                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </span>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                      Remember me
                                  </Label>
                            </FormGroup>
                            <p></p>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>

        );
    }
}

export default Header;