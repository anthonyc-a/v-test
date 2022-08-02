import ContainerSm from "../components/Common/Containers/Container";
import HeroCarousel from "../components/Home/HeroCarousel/HeroCarousel";
import LiveNow from "../components/Home/LiveNow/LiveNow";
import Layout from "../components/Layout/Layout";

const index = () => {
  return (
    <Layout>
      <ContainerSm>
        <HeroCarousel />
        <LiveNow />
      </ContainerSm>
    </Layout>
  );
};

export default index;
