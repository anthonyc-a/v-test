import Head from "next/head";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Stories from "./Stories/Stories";
import StoriesSidebar from "./Stories/StoriesSidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="md:flex">
      <Head>
        <script src="https://player.live-video.net/1.8.0/amazon-ivs-player.min.js"></script>
      </Head>
      <StoriesSidebar />
      <div className="md:w-[calc(100%-62px)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
