import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../../assets/scss/AccountSidebar.scss";


const AccountSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="account-sidebar mb-4 mb-lg-0">
      {/* Hamburger for mobile */}
      <div className="d-flex justify-content-between align-items-center d-md-none mb-3">
        <button
          className="btn btn-outline-secondary p-2"
          type="button"
          onClick={toggleSidebar}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar (visible from md and up) */}
      <div className={`collapse d-md-block ${isOpen ? "show" : ""}`} id="accountSidebar">
        <div className="p-3">
          {/* Search */}
          <div className="mb-4">
            <h6 className="sidebar-link mb-2">Search</h6>
            <div className="input-group mt-4">
              <input
                type="text"
                className="form-control sidebar-input"
                placeholder="Search here..."
              />
              <span className="input-group-text">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>

          {/* Account Section */}
          <div className="mb-4">
            <h5 className="sidebar-title mt-5 mb-2">Account</h5>
            <ul className="list-unstyled mt-4 mb-0">
              <li><a href="#" className="sidebar-link">Profile</a></li>
              <li><a href="#" className="sidebar-link">Password</a></li>
              <li><a href="#" className="sidebar-link">eWallet</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="mb-4">
            <h5 className="sidebar-title mb-2">Product</h5>
            <ul className="list-unstyled mt-4 mb-0">
              <li><a href="#" className="sidebar-link">View Cart</a></li>
              <li><a href="#" className="sidebar-link">Purchase History</a></li>
              <li><a href="#" className="sidebar-link">Delivery Status</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h5 className="sidebar-title mb-2">Social Media</h5>
            <ul className="list-unstyled mt-4 mb-0">
              <li><a href="#" className="sidebar-link">Message</a></li>
              <li><a href="#" className="sidebar-link">Chat</a></li>
              <li><a href="#" className="sidebar-link">Social Media</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
