import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors, actions } from "react-redux-form";
import { useDispatch } from "react-redux";
import { postFeedback } from "../redux/ActionCreators";

export default function Regiser() {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));
  const validEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(postFeedback(values));
    dispatch(actions.reset("feedback"));
  };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Register</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Register</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Fill the form below to register</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form model="feedback" onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".firstname"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".lastname"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Control.text
                  model=".telnum"
                  id="telnum"
                  name="telnum"
                  placeholder="Tel. Number"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".telnum"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 numbers",
                    maxLength: "Must be 15 numbers or less",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required",
                    validEmail: "Invalid Email Address",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="bvnnum" md={2}>
                BVN
              </Label>
              <Col md={10}>
                <Control.text
                  model=".bvnnum"
                  placeholder="BVN Number"
                  id="bvnnum"
                  name="bvnnum"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(11),
                    maxLength: maxLength(11),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".bvnnum"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be 11 numbers",
                    maxLength: "Must be 11 numbers",
                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="address" md={2}>
                Address
              </Label>
              <Col md={10}>
                <Control.text
                  id="address"
                  name="address"
                  className="form-control"
                  model=".address"
                  placeholder="Address"
                  validators={{
                    required,
                    minLength: minLength(3),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".address"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button
                  type="submit"
                  color="primary"
                  onClick={() => dispatch(actions.submit("feedback"))}
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}
