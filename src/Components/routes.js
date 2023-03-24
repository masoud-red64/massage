// import ContactUs from "./ContactUs/ContactUs";
// import Navbar from "./NavBar/Navbar";
// import Header from "./Header/Header";
// import Services from "./Services/Services";
// import Aboutus from "./Aboutus/Aboutus";
// import ServicesBox from "./ServicesBox/ServicesBox";
// import Suggest from "./Suggest/Suggest";
// import Footer from "./Footer/Footer";
// import TurnRating from "./TurnRating/TurnRating";
// import Gallery from "./Gallery/Gallery";
import React from "react";
const Gallery = React.lazy(() => import("./Gallery/Gallery"));
const ContactUs = React.lazy(() => import("./ContactUs/ContactUs"));
const Navbar = React.lazy(() => import("./NavBar/Navbar"));
const Header = React.lazy(() => import("./Header/Header"));
const Services = React.lazy(() => import("./Services/Services"));
const Aboutus = React.lazy(() => import("./Aboutus/Aboutus"));
const ServicesBox = React.lazy(() => import("./ServicesBox/ServicesBox"));
const Suggest = React.lazy(() => import("./Suggest/Suggest"));
const Footer = React.lazy(() => import("./Footer/Footer"));
const TurnRating = React.lazy(() => import("./TurnRating/TurnRating"));

const topScroll = () => {
  window.scrollTo(0, 0);
};

const routse = [
  {
    path: "/",
    element: [
      <Navbar onScroll={topScroll} />,
      <Header onScroll={topScroll} />,
      <Services />,
      <Aboutus />,
      <ServicesBox />,
      <Suggest />,
      <Footer />,
    ],
  },
  { path: "/contactus", element: [<Navbar />, <ContactUs />] },

  { path: "/services", element: [<Navbar />, <Services />, <ServicesBox />] },
  { path: "/turn", element: [<Navbar />, <TurnRating />] },
  { path: "/gallery", element: [<Navbar />, <Gallery />] },
];

export default routse;
