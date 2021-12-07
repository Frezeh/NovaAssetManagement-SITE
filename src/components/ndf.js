import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FadeTransform } from "react-animation-components";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Label,
  Button,
  Form,
} from "reactstrap";
import { fetchNdf, postNdfSale } from "../redux/ActionCreators";
import { useSelector, useDispatch } from "react-redux";

export default function Ndf(props) {
  useEffect(() => {
    dispatch(fetchNdf());
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");

  const ndf = useSelector((state) => state.ndf);

  const dispatch = useDispatch();

  const handleComment = () => {
    //alert("Current State is: " + JSON.stringify(comment));
    dispatch(postNdfSale(comment));
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const RenderCard = ({ item, isLoading, errMess }) => {
    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <Card>
          <Card.Img src={baseUrl + item.image} alt={item.name} />
          <Card.Body className="text-center">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <div
              style={{
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <button
                className="btn btn-md btn-info"
                onClick={toggleModal}
                style={{
                  width: 250,
                  backgroundColor: "#4682B4",
                  padding: 15,
                  justifyContent: "center",
                  marginBottom: 20,
                  borderRadius: 24,
                }}
              >
                Get Started
              </button>
            </div>
          </Card.Body>
        </Card>
      </FadeTransform>
    );
  };

  const Ndf = ndf.ndf.map((ndf) => {
    return (
      <div key={ndf._id} className="col-12 col-12 col-md-8">
        <RenderCard item={ndf} />
        <p></p>
      </div>
    );
  });

  if (ndf.isLoading) {
    return <Loading />;
  } else if (ndf.errMess) {
    return <h4>{ndf.errMess}</h4>;
  } else
    return (
      <div className="container" style={{ alignContent: "center" }}>
        <div className="row align-items-start">{Ndf}</div>
        <Modal isOpen={showModal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            What Quantity are you buying today?
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleComment}>
              <FormGroup>
                <Label for="comment">Price</Label> {"  "}
                <Input
                  name="comment"
                  placeholder="$"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="author">Price</Label> {"  "}
                <Input
                  name="author"
                  placeholder="Months"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </FormGroup>
              <Button type="submit" color="primary">
                Purchase
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
}
