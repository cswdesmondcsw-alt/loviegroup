import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
          <li>
            <Link to={ "/"}>
              {t("Home")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu mega-menu-padding">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={ "/"}>
                      {t("Home Group One")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-fashion"}>
                      {t("Home Fashion")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-fashion-two"}>
                      {t("Home Fashion Two")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-fashion-three"}>
                      {t("Home Fashion Three")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-fashion-four"}>
                      {t("Home Fashion Four")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-fashion-five"}>
                      {t("Home Fashion Five")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-fashion-six"}>
                      {t("Home Fashion Six")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-fashion-seven"}>
                      {t("Home Fashion Seven")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-fashion-eight"}>
                      {t("Home Fashion Eight")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-kids-fashion"}>
                      {t("Home Kids Fashion")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-cosmetics"}>
                      {t("Home Cosmetics")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-furniture"}>
                      {t("Home Furniture")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-furniture-two"}>
                      {t("Home Furniture Two")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-furniture-three"}>
                      {t("Home Furniture Three")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-furniture-four"}>
                      {t("Home Furniture Four")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={ "/"}>
                      {t("Home Group Two")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-furniture-five"}>
                      {t("Home Furniture Five")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-furniture-six"}>
                      {t("Home Furniture Six")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-furniture-seven"}>
                      {t("Home Furniture Seven")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-electronics"}>
                      {t("Home Electronics")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-electronics-two"}>
                      {t("Home Electronics Two")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ "/home-electronics-three"}
                    >
                      {t("Home Electronics Three")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-book-store"}>
                      {t("Home Book Store")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-book-store-two"}>
                      {t("Home Book Store Two")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-plants"}>
                      {t("Home Plants")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-flower-shop"}>
                      {t("Home Flower Shop")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-flower-shop-two"}>
                      {t("Home Flower Shop Two")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-organic-food"}>
                      {t("Home Organic Food")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ "/home-organic-food-two"}
                    >
                      {t("Home Organic Food Two")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-onepage-scroll"}>
                      {t("Home Onepage Scroll")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={ "/"}>
                      {t("Home Group Three")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-grid-banner"}>
                      {t("Home Grid Banner")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-auto-parts"}>
                      {t("Home Auto Parts")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-cake-shop"}>
                      {t("Home Cake Shop")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-handmade"}>
                      {t("Home Handmade")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-pet-food"}>
                      {t("Home Pet Food")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ "/home-medical-equipment"}
                    >
                      {t("Home Medical Equipment")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-christmas"}>
                      {t("Home Christmas")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-black-friday"}>
                      {t("Home Black Friday")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ "/home-black-friday-two"}
                    >
                      {t("Home Black Friday Two")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/home-valentines-day"}>
                      {t("Home Valentines Day")}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={ "/shop-grid-standard"}>
              {" "}
              {t("Shop")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={ "/shop-grid-standard"}>
                      {t("Shop Layout")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/shop-grid-standard"}>
                      {t("Shop Grid Standard")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/shop-grid-filter"}>
                      {t("Shop Grid Filter")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/shop-grid-two-column"}>
                      {t("Shop Grid Two Column")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/shop-grid-no-sidebar"}>
                      {t("Shop Grid No Sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/shop-grid-full-width"}>
                      {t("Shop Grid Full Width")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ "/shop-grid-right-sidebar"}
                    >
                      {t("Shop Grid Right Sidebar")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/shop-list-standard"}>
                      {t("Shop List Standard")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/shop-list-full-width"}>
                      {t("Shop List Full Width")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/shop-list-two-column"}>
                      {t("Shop List Two Column")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={ "/product/1"}>
                      {t("Product Details")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/product/1"}>
                      {t("Product Tab Bottom")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/product-tab-left/1"}>
                      {t("Product Tab Left")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/product-tab-right/1"}>
                      {t("Product Tab Right")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/product-sticky/1"}>
                      {t("Product Sticky")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/product-slider/1"}>
                      {t("Product Slider")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ "/product-fixed-image/1"}
                    >
                      {t("Product Fixed Image")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/product/8"}>
                      {t("Product Simple")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/product/1"}>
                      {t("Product Variation")}
                    </Link>
                  </li>
                  <li>
                    <Link to={ "/product/9"}>
                      {t("Product Affiliate")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={ "/shop-grid-standard"}>
                      <img
                        src={
                          "/assets/img/banner/banner-12.png"
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={ "/shop-grid-standard"}>
              {t("Collection")}
            </Link>
          </li>
          <li>
            <Link to={ "/"}>
              {t("Pages")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={ "/cart"}>
                  {t("Cart")}
                </Link>
              </li>
              <li>
                <Link to={ "/checkout"}>
                  {t("Checkout")}
                </Link>
              </li>
              <li>
                <Link to={ "/wishlist"}>
                  {t("Wishlist")}
                </Link>
              </li>
              <li>
                <Link to={ "/compare"}>
                  {t("Compare")}
                </Link>
              </li>
              <li>
                <Link to={ "/my-account"}>
                  {t("My Account")}
                </Link>
              </li>
              <li>
                <Link to={ "/login-register"}>
                  {t("Login Register")}
                </Link>
              </li>
              <li>
                <Link to={ "/about"}>
                  {t("About Us")}
                </Link>
              </li>
              <li>
                <Link to={ "/contact"}>
                  {t("Contact Us")}
                </Link>
              </li>
              <li>
                <Link to={ "/not-found"}>
                  {t("404_page")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={ "/blog-standard"}>
              {t("Blog")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={ "/blog-standard"}>
                  {t("Blog Standard")}
                </Link>
              </li>
              <li>
                <Link to={ "/blog-no-sidebar"}>
                  {t("Blog No Sidebar")}
                </Link>
              </li>
              <li>
                <Link to={ "/blog-right-sidebar"}>
                  {t("Blog Right Sidebar")}
                </Link>
              </li>
              <li>
                <Link to={ "/blog-details-standard"}>
                  {t("Blog Details Standard")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={ "/contact"}>
              {t("Contact Us")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
