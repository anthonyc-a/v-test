import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Stories from "./Stories/Stories";
import StoriesSidebar from "./Stories/StoriesSidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="md:flex">
      <StoriesSidebar />
      <div className="md:w-[calc(100%-62px)]">
        <Header />
        <Stories />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
