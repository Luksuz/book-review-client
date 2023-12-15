import Layout from "./components/Layout/Layout";
import { Row, Col, InputGroup, Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("change username");
  return (
    <Layout>
      <Row style={{height:"65vh"}} className="d-flex justify-content-end">
        <Col sm={3} md={2} className="d-flex flex-column text-center justify-content-around rounded-3 shadow-lg bg-secondary">
          <div onClick={() => setActiveTab("change username")}>
            <h1>Change profile</h1>
          </div>
          <hr />
          <div onClick={() => setActiveTab("block users")}>
            <h1>Block users</h1>
          </div>
          <hr />
          <div onClick={() => setActiveTab("delete account")}>
            <h1>Delete account</h1>
          </div>
        </Col>
        <Col sm={9} md={7} className="p-5">
          {(() => {
            switch (activeTab) {
              case "change username":
                return <ChangeUsername />;
              case "block users":
                return <BlockUsers />;
              case "delete account":
                return <DeleteAccount />;
              default:
                return <ChangeUsername />;
            }
          })()}
        </Col>
      </Row>
    </Layout>
  );
}

function ChangeUsername() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div>
      <div>
        <h1>Change username</h1>
        <Form>
          <InputGroup className="">
            <InputGroup.Text id="inputGroup-sizing-default">
              New username
            </InputGroup.Text>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Password
            </InputGroup.Text>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <button onClick={handleSubmit} className="btn btn-primary">
            Change username
          </button>
        </Form>
      </div>

      <br />
      <hr />

      <div>
        <Form>
          <h1>Change password</h1>
          <InputGroup className="">
            <InputGroup.Text id="inputGroup-sizing-default">
              Old password
            </InputGroup.Text>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              New password
            </InputGroup.Text>
            <Form.Control
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <button onClick={handleSubmit} className="btn btn-primary">
            Change password
          </button>
        </Form>
      </div>
    </div>
  );
}

function BlockUsers() {
  const [blockUser, setBlockUser] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blockUser, reason);
  };

  return (
    <Form>
      <h1>Block User</h1>
      <InputGroup className="">
        <InputGroup.Text id="inputGroup-sizing-default">
          User to block
        </InputGroup.Text>
        <Form.Control
          value={blockUser}
          onChange={(e) => setBlockUser(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <div key={`default-checkbox`} className="my-5">
        <Form.Check // prettier-ignore
          type="checkbox"
          id={`default-checkbox`}
          label="Inapropiate content"
        />

        <Form.Check // prettier-ignore
          type="checkbox"
          id={`default-checkbox`}
          label="Harassment"
        />

        <Form.Check // prettier-ignore
          type="checkbox"
          id={`default-checkbox`}
          label="Spam"
        />

        <Form.Check // prettier-ignore
          type="checkbox"
          id={`default-checkbox`}
          label="Non-related content"
        />

        <Form.Check // prettier-ignore
          type="checkbox"
          id={`default-checkbox`}
          label="Other"
        />
      </div>

      <button onClick={handleSubmit} className="btn btn-primary">
        Block user
      </button>
    </Form>
  );
}

function DeleteAccount() {
  const [safeWord, setSafeWord] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("delete" === safeWord ? "Account deleted" : "Wrong word");
  };

  return (
    <div>
      <h1>Delete account</h1>
      <p>Are you sure you want to delete your account?</p>
      <button onClick={handleShow} className="btn btn-danger">
        Delete account
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            Confirm Account Deletion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="">
              <InputGroup.Text id="inputGroup-sizing-default">
                Enter safe word
              </InputGroup.Text>
              <Form.Control
                value={safeWord}
                onChange={(e) => setSafeWord(e.target.value)}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
