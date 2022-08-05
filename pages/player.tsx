import ContainerSm from "../components/Common/Containers/Container";
import Gallery from "../components/Home/Gallery/Gallery";
import Layout from "../components/Layout/Layout";
import RecentBroadcast from "../components/Player/RecentBroadcast/RecentBroadcast";
import VideoPlayer from "../components/Player/Stream/Stream";
import Stream from "../components/Player/Stream/Stream";
import * as config from "../config";

const player = () => {
  return (
    <Layout>

      <VideoPlayer playbackUrl={config.PLAYBACK_URL} />

      <ContainerSm>
        <RecentBroadcast />
        <Gallery/>
      </ContainerSm>

    </Layout>
  );
};

export default player;
