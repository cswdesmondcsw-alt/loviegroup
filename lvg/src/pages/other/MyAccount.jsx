import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import AccountSidebar from "../../components/user-dashboard/AccountSidebar";

const MyAccount = () => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      {/* SEO Meta Tags */}
      <SEO
        titleTemplate="My Account"
        description="My Account page of flone react minimalist eCommerce template."
      />

      {/* Main Layout */}
      <LayoutOne headerTop="visible">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          pages={[
            { label: "Home", path:  "/" },
            { label: "My Account", path:  pathname },
          ]}
        />

        {/* My Account Section */}
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              {/* Sidebar */}
              <div className="col-lg-3 col-md-4">
                <AccountSidebar />
              </div>

              {/* Main Account Content */}
              <div className="col-lg-9 col-md-8">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    {/* 1. Edit Account Info */}
                    <Accordion.Item eventKey="0" className="single-my-account mb-20">
                      <Accordion.Header>
                        <span>1.</span> Edit your account information
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>My Account Information</h4>
                            <h5>Your Personal Details</h5>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>First Name</label>
                                <input type="text" placeholder="John" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Email Address</label>
                                <input type="email" placeholder="you@example.com" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Telephone</label>
                                <input type="text" placeholder="+1 234 567 890" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Fax</label>
                                <input type="text" placeholder="(optional)" />
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button type="submit">Continue</button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* 2. Change Password */}
                    <Accordion.Item eventKey="1" className="single-my-account mb-20">
                      <Accordion.Header>
                        <span>2.</span> Change your password
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>Change Password</h4>
                            <h5>Your Password</h5>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>New Password</label>
                                <input type="password" />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Confirm Password</label>
                                <input type="password" />
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button type="submit">Continue</button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* 3. Modify Address Book */}
                    <Accordion.Item eventKey="2" className="single-my-account mb-20">
                      <Accordion.Header>
                        <span>3.</span> Modify your address book entries
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>Address Book Entries</h4>
                          </div>
                          <div className="entries-wrapper">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                <div className="entries-info text-center">
                                  <p>John Doe</p>
                                  <p>123 Bitcoin St.</p>
                                  <p>New York, NY 10001</p>
                                  <p>USA</p>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                <div className="entries-edit-delete text-center">
                                  <button className="edit">Edit</button>
                                  <button>Delete</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button type="submit">Continue</button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
