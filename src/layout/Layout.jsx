import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
