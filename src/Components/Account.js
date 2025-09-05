import React, { useState } from "react";
import { Dropdown, Modal, Button, Form } from "react-bootstrap";
import "./Account.css";

function Account() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* Nút Account Dropdown */}
      <Dropdown align="end" className="account-dropdown">
        <Dropdown.Toggle
          variant="light"
          id="dropdown-account"
          className="account-toggle"
        >
          <img
            src="https://galle.vn/images/config/account-dark_1718256807.svg"
            alt="Account"
            width="26"
            height="25"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setShowLogin(true)}>
            Đăng nhập
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setShowRegister(true)}>
            Tạo tài khoản
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Popup Đăng nhập */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập mật khẩu" />
            </Form.Group>
            <Button variant="primary" className="w-100">
              Đăng nhập
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Popup Đăng ký */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tạo tài khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập họ và tên" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập mật khẩu" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nhập lại mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
            </Form.Group>
            <Button variant="success" className="w-100">
              Đăng ký
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Account;
