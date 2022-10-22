import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Card from "../../../../components/Card";
import { Link } from "react-router-dom";
//datepicker
import Datepickers from "../../../../components/Datepicker";
import axios from "axios";
import { useState } from "react";

const FactureAdd = () => {
  const [formErrors, setFormErrors] = useState({});

  const [formFacture, setFormFacture] = useState({
    etat: "",
    description: "",
    nom: "",
    date: "",
   
  });
  const {
    etat,
    description,
    date_livraison,
    nom,
    date,
   
  } = formFacture;

  const onChange = (e) =>
    setFormFacture({ ...formFacture, [e.target.name]: e.target.value });
  console.log(formFacture);

  const onSubmit = async (e) => {
    //  e.preventDefault();
    axios.post("http://localhost:8084/Facture/add", formFacture);
  };

  const deleteFacture = async (id) => {
    axios.delete("http://localhost:8084/Facture/" + id);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="12">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb p-0 mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/Facture">Facture</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add Facture
                    </li>
                  </ol>
                </nav>
              </div>
              <Link
                to="/Facture"
                className="btn btn-primary btn-sm d-flex align-items-center justify-content-between"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Back</span>
              </Link>
            </div>
          </Col>
          <Col lg="12" className="mb-3 d-flex justify-content-between">
            <h4 className="font-weight-bold0 d-flex align-items-center">
              Add New Facture
            </h4>
          </Col>
          <Col lg="12">
            <Card>
              <Card.Body>
                <Row>
                  <Col md="12">
                    <form
                      className="row g-3 date-icon-set-modal"
                      onSubmit={onSubmit}
                    >
                      <div className="col-md-6 mb-3">
                        <Form.Label
                          htmlFor="Text1"
                          className="font-weight-bold text-muted text-uppercase"
                        >
                          Nom
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="Text1"
                          name="nom"
                          value={nom}
                          onChange={(e) => onChange(e)}
                          placeholder="Enter Full Name"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <Form.Label className="font-weight-bold text-muted text-uppercase">
                          Etat
                        </Form.Label>
                        <br />
                        <div className="form-check form-check-inline">
                          <Form.Control
                            type="text"
                            id="Text1"
                            name="etat"
                            value={etat}
                            onChange={(e) => onChange(e)}
                            placeholder="Enter etat"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-3 position-relative">
                        <Form.Label
                          htmlFor="Text2"
                          className="font-weight-bold text-muted text-uppercase"
                        >
                          Date Facture
                        </Form.Label>
                        <Form.Control
                          type="date"
                          className="vanila-datepicker"
                          value={date}
                          onChange={(e) => onChange(e)}
                          id="Text2"
                          name="date"
                          placeholder="Enter Birth Day"
                          autoComplete="off"
                        />
                        <span className="search-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                      </div>

                      <div className="col-md-6 mb-3">
                        <Form.Label
                          htmlFor="Text2"
                          className="font-weight-bold text-muted text-uppercase"
                        >
                          Date Livraison
                        </Form.Label>
                        <Form.Control
                          type="date"
                          value={date_livraison}
                          onChange={(e) => onChange(e)}
                          className="vanila-datepicker"
                          id="Text2"
                          name="date_livraison"
                          placeholder="Enter Birth Day"
                          autoComplete="off"
                        />
                        <span className="search-link">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                      </div>

                      <div className="col-md-6 mb-3">
                        <Form.Label
                          htmlFor="Text4"
                          className="font-weight-bold text-muted text-uppercase"
                        >
                          Description
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={description}
                          name="description"
                          onChange={(e) => onChange(e)}
                          id="Text4"
                          placeholder="Description"
                        />
                      </div>

                     


                      <div className="d-flex justify-content-end mt-3">
                        <Button variant="btn btn-primary" type="submit">
                          Add Facture
                        </Button>
                      </div>
                    </form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FactureAdd;
