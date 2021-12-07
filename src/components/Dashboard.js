import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Typography from "@material-ui/core/Typography";
import Transactions from "./Transactions";
import IndicatorBody from "./IndicatorBody";

const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Dashboard</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                {activeTab === "1" ? (
                  <Typography
                    variant="h6"
                    align="left"
                    component="h6"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Transactions
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    align="left"
                    component="h6"
                    style={{ color: "gray", fontWeight: "bold" }}
                  >
                    Transactions
                  </Typography>
                )}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                {activeTab === "2" ? (
                  <Typography
                    variant="h6"
                    align="left"
                    component="h6"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Indicators
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    align="left"
                    component="h6"
                    style={{ color: "gray", fontWeight: "bold" }}
                  >
                    Indicators
                  </Typography>
                )}
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} style={{ paddingTop: 20 }}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Transactions />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <IndicatorBody />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
