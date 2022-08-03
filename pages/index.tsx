import ContainerSm from "../components/Common/Containers/Container";
import Gallery from "../components/Home/Gallery/Gallery";
import HeroCarousel from "../components/Home/HeroCarousel/HeroCarousel";
import Categories from "../components/Home/LiveNow/Categories/Categories";
import LiveNow from "../components/Home/LiveNow/LiveNow";
import Recommended from "../components/Home/Recommended/Recommended";
import Layout from "../components/Layout/Layout";

const index = () => {
  return (
    <Layout>
      <ContainerSm>
        <HeroCarousel />
        <LiveNow />
        <Categories />
        <Recommended />
        <Gallery />
      </ContainerSm>
    </Layout>
  );
};

export default index;
