import { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import './assets/scss/style.scss';
// import "leaflet/dist/leaflet.css";

// App.jsx
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ToastManager from "./components/ToastManager";
import IsUserAccountConfirmedRoute from "./routes/IsUserAccountConfirmedRoute";
import IsLoggedInUser from "./routes/IsLoginPageAccessibleRoute";
import IsLoginPageAccessible from "./routes/IsLoginPageAccessibleRoute";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";

// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
const HomeFashionTwo = lazy(() => import("./pages/home/HomeFashionTwo"));
const HomeFashionThree = lazy(() => import("./pages/home/HomeFashionThree"));
const HomeFashionFour = lazy(() => import("./pages/home/HomeFashionFour"));
const HomeFashionFive = lazy(() => import("./pages/home/HomeFashionFive"));
const HomeFashionSix = lazy(() => import("./pages/home/HomeFashionSix"));
const HomeFashionSeven = lazy(() => import("./pages/home/HomeFashionSeven"));
const HomeFashionEight = lazy(() => import("./pages/home/HomeFashionEight"));
const HomeKidsFashion = lazy(() => import("./pages/home/HomeKidsFashion"));
const HomeCosmetics = lazy(() => import("./pages/home/HomeCosmetics"));
const HomeFurniture = lazy(() => import("./pages/home/HomeFurniture"));
const HomeFurnitureTwo = lazy(() => import("./pages/home/HomeFurnitureTwo"));
const HomeFurnitureThree = lazy(
  () => import("./pages/home/HomeFurnitureThree"),
);
const HomeFurnitureFour = lazy(() => import("./pages/home/HomeFurnitureFour"));
const HomeFurnitureFive = lazy(() => import("./pages/home/HomeFurnitureFive"));
const HomeFurnitureSix = lazy(() => import("./pages/home/HomeFurnitureSix"));
const HomeFurnitureSeven = lazy(
  () => import("./pages/home/HomeFurnitureSeven"),
);
const HomeElectronics = lazy(() => import("./pages/home/HomeElectronics"));
const HomeElectronicsTwo = lazy(
  () => import("./pages/home/HomeElectronicsTwo"),
);
const HomeElectronicsThree = lazy(
  () => import("./pages/home/HomeElectronicsThree"),
);
const HomeBookStore = lazy(() => import("./pages/home/HomeBookStore"));
const HomeBookStoreTwo = lazy(() => import("./pages/home/HomeBookStoreTwo"));
const HomePlants = lazy(() => import("./pages/home/HomePlants"));
const HomeFlowerShop = lazy(() => import("./pages/home/HomeFlowerShop"));
const HomeFlowerShopTwo = lazy(() => import("./pages/home/HomeFlowerShopTwo"));
const HomeOrganicFood = lazy(() => import("./pages/home/HomeOrganicFood"));
const HomeOrganicFoodTwo = lazy(
  () => import("./pages/home/HomeOrganicFoodTwo"),
);
const HomeOnepageScroll = lazy(() => import("./pages/home/HomeOnepageScroll"));
const HomeGridBanner = lazy(() => import("./pages/home/HomeGridBanner"));
const HomeAutoParts = lazy(() => import("./pages/home/HomeAutoParts"));
const HomeCakeShop = lazy(() => import("./pages/home/HomeCakeShop"));
const HomeHandmade = lazy(() => import("./pages/home/HomeHandmade"));
const HomePetFood = lazy(() => import("./pages/home/HomePetFood"));
const HomeMedicalEquipment = lazy(
  () => import("./pages/home/HomeMedicalEquipment"),
);
const HomeChristmas = lazy(() => import("./pages/home/HomeChristmas"));
const HomeBlackFriday = lazy(() => import("./pages/home/HomeBlackFriday"));
const HomeBlackFridayTwo = lazy(
  () => import("./pages/home/HomeBlackFridayTwo"),
);
const HomeValentinesDay = lazy(() => import("./pages/home/HomeValentinesDay"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridTwoColumn = lazy(() => import("./pages/shop/ShopGridTwoColumn"));
const ShopGridNoSidebar = lazy(() => import("./pages/shop/ShopGridNoSidebar"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopGridRightSidebar = lazy(
  () => import("./pages/shop/ShopGridRightSidebar"),
);
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));
const ShopListTwoColumn = lazy(() => import("./pages/shop/ShopListTwoColumn"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(
  () => import("./pages/shop-product/ProductTabLeft"),
);
const ProductTabRight = lazy(
  () => import("./pages/shop-product/ProductTabRight"),
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(
  () => import("./pages/shop-product/ProductFixedImage"),
);

// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));
const BlogRightSidebar = lazy(() => import("./pages/blog/BlogRightSidebar"));
const BlogDetailsStandard = lazy(
  () => import("./pages/blog/BlogDetailsStandard"),
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Register = lazy(() => import("./pages/other/Register"));
const Login = lazy(() => import("./pages/other/Register"));
const Fpw = lazy(() => import("./pages/other/Register"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
// const EmailConfirmation = lazy(() => import("./pages/other/EmailConfirmation"));

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <ToastManager />
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path={"/"} element={<HomeFashion />} />

            {/* Homepages */}
            <Route path={"/home-fashion"} element={<HomeFashion />} />
            <Route path={"/home-fashion-two"} element={<HomeFashionTwo />} />
            <Route
              path={"/home-fashion-three"}
              element={<HomeFashionThree />}
            />
            <Route path={"/home-fashion-four"} element={<HomeFashionFour />} />
            <Route path={"/home-fashion-five"} element={<HomeFashionFive />} />
            <Route path={"/home-fashion-six"} element={<HomeFashionSix />} />
            <Route
              path={"/home-fashion-seven"}
              element={<HomeFashionSeven />}
            />
            <Route
              path={"/home-fashion-eight"}
              element={<HomeFashionEight />}
            />
            <Route path={"/home-kids-fashion"} element={<HomeKidsFashion />} />
            <Route path={"/home-cosmetics"} element={<HomeCosmetics />} />
            <Route path={"/home-furniture"} element={<HomeFurniture />} />
            <Route
              path={"/home-furniture-two"}
              element={<HomeFurnitureTwo />}
            />
            <Route
              path={"/home-furniture-three"}
              element={<HomeFurnitureThree />}
            />
            <Route
              path={"/home-furniture-four"}
              element={<HomeFurnitureFour />}
            />
            <Route
              path={"/home-furniture-five"}
              element={<HomeFurnitureFive />}
            />
            <Route
              path={"/home-furniture-six"}
              element={<HomeFurnitureSix />}
            />
            <Route
              path={"/home-furniture-seven"}
              element={<HomeFurnitureSeven />}
            />
            <Route path={"/home-electronics"} element={<HomeElectronics />} />
            <Route
              path={"/home-electronics-two"}
              element={<HomeElectronicsTwo />}
            />
            <Route
              path={"/home-electronics-three"}
              element={<HomeElectronicsThree />}
            />
            <Route path={"/home-book-store"} element={<HomeBookStore />} />
            <Route
              path={"/home-book-store-two"}
              element={<HomeBookStoreTwo />}
            />
            <Route path={"/home-plants"} element={<HomePlants />} />
            <Route path={"/home-flower-shop"} element={<HomeFlowerShop />} />
            <Route
              path={"/home-flower-shop-two"}
              element={<HomeFlowerShopTwo />}
            />
            <Route path={"/home-organic-food"} element={<HomeOrganicFood />} />
            <Route
              path={"/home-organic-food-two"}
              element={<HomeOrganicFoodTwo />}
            />
            <Route
              path={"/home-onepage-scroll"}
              element={<HomeOnepageScroll />}
            />
            <Route path={"/home-grid-banner"} element={<HomeGridBanner />} />
            <Route path={"/home-auto-parts"} element={<HomeAutoParts />} />
            <Route path={"/home-cake-shop"} element={<HomeCakeShop />} />
            <Route path={"/home-handmade"} element={<HomeHandmade />} />
            <Route path={"/home-pet-food"} element={<HomePetFood />} />
            <Route
              path={"/home-medical-equipment"}
              element={<HomeMedicalEquipment />}
            />
            <Route path={"/home-christmas"} element={<HomeChristmas />} />
            <Route path={"/home-black-friday"} element={<HomeBlackFriday />} />
            <Route
              path={"/home-black-friday-two"}
              element={<HomeBlackFridayTwo />}
            />
            <Route
              path={"/home-valentines-day"}
              element={<HomeValentinesDay />}
            />

            {/* Shop pages */}
            <Route
              path={"/shop-grid-standard"}
              element={<ShopGridStandard />}
            />
            <Route path={"/shop-grid-filter"} element={<ShopGridFilter />} />
            <Route
              path={"/shop-grid-two-column"}
              element={<ShopGridTwoColumn />}
            />
            <Route
              path={"/shop-grid-no-sidebar"}
              element={<ShopGridNoSidebar />}
            />
            <Route
              path={"/shop-grid-full-width"}
              element={<ShopGridFullWidth />}
            />
            <Route
              path={"/shop-grid-right-sidebar"}
              element={<ShopGridRightSidebar />}
            />
            <Route
              path={"/shop-list-standard"}
              element={<ShopListStandard />}
            />
            <Route
              path={"/shop-list-full-width"}
              element={<ShopListFullWidth />}
            />
            <Route
              path={"/shop-list-two-column"}
              element={<ShopListTwoColumn />}
            />

            {/* Shop product pages */}
            <Route path={"/product/:id"} element={<Product />} />
            <Route
              path={"/product-tab-left/:id"}
              element={<ProductTabLeft />}
            />
            <Route
              path={"/product-tab-right/:id"}
              element={<ProductTabRight />}
            />
            <Route path={"/product-sticky/:id"} element={<ProductSticky />} />
            <Route path={"/product-slider/:id"} element={<ProductSlider />} />
            <Route
              path={"/product-fixed-image/:id"}
              element={<ProductFixedImage />}
            />

            {/* Blog pages */}
            <Route path={"/blog-standard"} element={<BlogStandard />} />
            <Route path={"/blog-no-sidebar"} element={<BlogNoSidebar />} />
            <Route
              path={"/blog-right-sidebar"}
              element={<BlogRightSidebar />}
            />
            <Route
              path={"/blog-details-standard"}
              element={<BlogDetailsStandard />}
            />

            {/* Other pages */}
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route
              path={"/my-account"}
              element={
                <IsUserAccountConfirmedRoute>
                  <ProtectedRoute>
                    <MyAccount />
                  </ProtectedRoute>
                </IsUserAccountConfirmedRoute>
              }
            />
            <Route
              path={"/login-register"}
              element={
                <IsLoginPageAccessible>
                  <LoginRegister />
                </IsLoginPageAccessible>
              }
            />

            <Route path={"/register"} element={<Register />} />

            <Route path={"/login"} element={<Login />} />

            <Route path={"/fpw"} element={<Fpw />} />

            <Route path={"/cart"} element={<Cart />} />
            <Route
              path={"/wishlist"}
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route
              path={"/compare"}
              element={
                <ProtectedRoute>
                  <Compare />
                </ProtectedRoute>
              }
            />
            <Route
              path={"/checkout"}
              element={
                <AuthenticatedRoute>
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                </AuthenticatedRoute>
              }
            />
            {/* <Route path="/email-confirmation" element={<EmailConfirmation />} /> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;

// function App() {
//   const [count, setCount] = useState(0)
//   const [articles, setArticles] = useState([])

//   useEffect(() => {
//     axios
//       .get("http://localhost:1337/api/articles")
//       .then(res => setArticles(res.data.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <div>
//         <h1>Articles</h1>
//         {articles.map((article) => (
//           <div key={article.id}>{article.title} <br /> {article.description}</div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default App
