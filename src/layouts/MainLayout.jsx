import Navigation from "../component/shared/Navigation";
import Footer from "../component/shared/Footer";
import Banner from "../component/pages/homepage/Banner";
import GalllerySec from "../component/pages/homepage/GalllerySec";
import ShopByCategory from "../component/pages/homepage/ShopByCategory";
import NewArrivals from "../component/pages/homepage/NewArrivals";
import Outlet from "../component/pages/homepage/Outlet";
import DealsDiscounts from "../component/pages/homepage/DealsDiscounts";

const MainLayout = () => {
  return (
    <>
      <Navigation></Navigation>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
      <GalllerySec></GalllerySec>
      <DealsDiscounts></DealsDiscounts>
      <ShopByCategory></ShopByCategory>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
