import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const FournisseurView = () => {
  const { id } = useParams();
  const [fournisseur, setFournisseur] = React.useState({});

  //get data form api
  const getFournisseurByID = () => {
    axios.get(`http://localhost:8099/${id}`).then((response) => {
      setFournisseur(response.data);
    });
  };

  React.useEffect(() => {
    getFournisseurByID();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="12">
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb p-0 mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/Fournisseur">Fournisseurs</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Fournisseur Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="font-weight-bold">fournisseur Details</h4>
              <Link className="btn btn-primary btn-sm" to="/fournisseur-new">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card>
              <ListGroup as="ul" className="list-group-flush">
                <ListGroup.Item as="li" className="p-3">
                  <h5 className="font-weight-bold pb-2">fournisseur Info</h5>
                  <div className="table-responsive">
                    <table className="table table-bfournisseurless mb-0">
                      <tbody>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">ID</td>
                          <td>{fournisseur.idFournisseur}</td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">Nom</td>
                          <td>{fournisseur.nom}</td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">prenom</td>
                          <td>{fournisseur.prenom}</td>
                        </tr>
                        <tr className="white-space-no-wrap">
                          <td className="text-muted pl-0">Email</td>
                          <td className="text-primary">{fournisseur.email} DT</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </ListGroup.Item>
                {/* <ListGroup.Item as="li" className="p-3">
                            <h5 className="font-weight-bold pb-2">Customer Details</h5>
                            <div className="table-responsive">
                                <table className="table table-bfournisseurless mb-0">
                                    <tbody>
                                        <tr className="white-space-no-wrap">
                                            <td className="text-muted pl-0">
                                                Name
                                            </td>
                                            <td>
                                                John Lynn
                                            </td>
                                        </tr>
                                        <tr className="white-space-no-wrap">
                                            <td className="text-muted pl-0">
                                                Email
                                            </td>
                                            <td>
                                                lynnj34@blueberry.com
                                            </td>
                                        </tr>
                                        <tr className="white-space-no-wrap">
                                            <td className="text-muted pl-0">
                                                Phone
                                            </td>
                                            <td>
                                                +21 11445-2213
                                            </td>
                                        </tr>
                                        <tr className="white-space-no-wrap">
                                            <td className="text-muted pl-0">
                                                Country
                                            </td>
                                            <td>
                                                USA
                                            </td>
                                        </tr>
                                        <tr className="white-space-no-wrap">
                                            <td className="text-muted pl-0">
                                                State/Region
                                            </td>
                                            <td>
                                                Ohio
                                            </td>
                                        </tr>
                                        <tr className="white-space-no-wrap">
                                            <td className="text-muted pl-0">
                                                Address
                                            </td>
                                            <td>
                                                201, Baker Street
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ListGroup.Item> */}
              </ListGroup>
            </Card>
          </Col>
          <Col lg="8">
            {/* <Card>
                    <ListGroup as="ul" className="list-group-flush">
                        <ListGroup.Item as="li" className="p-3">
                            <h5 className="font-weight-bold">fournisseur Items</h5>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="p-0">
                           <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead>
                                        <tr className="text-muted">
                                        <th scope="col">Product</th>
                                        <th scope="col" className="text-right">Quantity</th>
                                        <th scope="col" className="text-right">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                    <div className="h-avatar is-medium">
                                                        <img className="avatar rounded"alt="user-icon" src={product1}/>
                                                    </div>
                                                    <div className="data-content">
                                                        <div>
                                                        <span className="font-weight-bold">Bassheads 220 Wired Headset</span>                           
                                                        </div>
                                                        <p className="m-0 mt-1">
                                                        Molten Orange, In the Ear
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                1
                                            </td>
                                            <td className="text-right">
                                                $74.98
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                    <div className="h-avatar is-medium">
                                                        <img className="avatar rounded" alt="user-icon" src={product6}/>
                                                    </div>
                                                    <div className="data-content">
                                                        <div>
                                                        <span className="font-weight-bold">HP v150W PENDRIVE</span>                           
                                                        </div>
                                                        <p className="m-0 mt-1">
                                                        64 GB (Blue, Black)
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                3
                                            </td>
                                            <td className="text-right">
                                                $199.97
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                    <div className="h-avatar is-medium">
                                                        <img className="avatar rounded" alt="user-icon" src={product8}/>
                                                    </div>
                                                    <div className="data-content">
                                                        <div>
                                                        <span className="font-weight-bold">M10 FHD Plus with Active Pen Tablet</span>                           
                                                        </div>
                                                        <p className="m-0 mt-1">
                                                        (2nd Gen) 10.3 inches
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                1
                                            </td>
                                            <td className="text-right">
                                                $962.49
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="p-3">
                            <div className="d-flex justify-content-end">
                               Total: <p className="ml-2 mb-0 font-weight-bold">$1,237.44</p>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FournisseurView;
