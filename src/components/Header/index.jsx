import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import './styles.scss'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from "../../redux/actions/user"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



function Header({ user, ...props }) {
    const history = useHistory();
    const handleOnClickLogin = () => {
        history.push("/login");
    }

    const handleOnClickRegister = () => {
        history.push("/register");
    }

    const handleOnClickLogout = () => {
        props.userLogout()
    }

    const handleOnClickAddQuestion = () => {
        history.push("/add-question");
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    console.log(user)
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a href="#" className="header__logo">
                            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" />
                        </a>
                    </Col>
                    <Col className="header__auth" xs="auto">
                        {!user ? (
                            <div>
                                <Button className="header__auth--btn" onClick={handleOnClickLogin} color="primary" size="lg">Đăng nhập</Button>
                                <Button className="header__auth--btn" onClick={handleOnClickRegister} color="danger" size="lg">Đăng ký</Button>
                            </div>
                        ) : (
                                <div>
                                    <Dropdown direction="end" isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle color="primary">
                                            {user.name}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Cá nhân</DropdownItem>
                                            <DropdownItem onClick={handleOnClickAddQuestion}>Đặt câu hỏi</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem onClick={handleOnClickLogout}>Đăng xuất</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            )}
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
    userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);