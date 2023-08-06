import Navigation from "../component/shared/Navigation";
import Footer from "../component/shared/Footer";
import Banner from "../component/pages/homepage/Banner";
import GalllerySec from "../component/pages/homepage/GalllerySec";
import ShopByCategory from "../component/pages/homepage/ShopByCategory";
import NewArrivals from "../component/pages/homepage/NewArrivals";
import Outlet from "../component/pages/homepage/Outlet";
import DealsDiscounts from "../component/pages/homepage/DealsDiscounts";
import { useEffect } from "react";
import MiniSection from "../component/pages/homepage/MiniSection";
import Newletter from "../component/pages/homepage/Newletter";
import Brands from "../component/pages/homepage/Brands";

const MainLayout = () => {
  useEffect(() => {
    document.title = "HH | Home";
  }, []);
  return (
    <>
      <Navigation/>
      <Banner/>
      <MiniSection/>
      <NewArrivals/>
      <DealsDiscounts/>
      <GalllerySec/>
      <DealsDiscounts/>
      <ShopByCategory/>
      <Outlet/>
      <Brands/>
      <Newletter/>
      <Footer/>
    </>
  );
};

export default MainLayout;
