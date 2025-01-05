import { Outlet } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <EmployeeProvider>
        <Outlet />
      </EmployeeProvider>
      <Footer />
    </div>
  );
};

export default Layout;
