import Navigation from "../component/shared/Navigation";
import Footer from "../component/shared/Footer";
import Banner from "../component/pages/homepage/Banner";
import GalllerySec from "../component/pages/homepage/GalllerySec";
import ShopByCategory from "../component/pages/homepage/ShopByCategory";
import App from "../App";
import NewArrivals from "../component/pages/homepage/NewArrivals";

const MainLayout = () => {
    return (
        <>
        <Navigation></Navigation>
        <Banner></Banner>
        <GalllerySec></GalllerySec>
        <ShopByCategory></ShopByCategory>
        <NewArrivals></NewArrivals>
        <App></App>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;