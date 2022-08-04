import ContainerSm from "../components/Common/Containers/Container";
import Gallery from "../components/Home/Gallery/Gallery";
import Layout from "../components/Layout/Layout";
import RecentBroadcast from "../components/Player/RecentBroadcast/RecentBroadcast";
import Stream from "../components/Player/Stream/Stream";

const player = () => {
  return (
    <Layout>
      <Stream />

      <ContainerSm>
        <RecentBroadcast />
        <Gallery/>
      </ContainerSm>
    </Layout>
  );
};

export default player;
