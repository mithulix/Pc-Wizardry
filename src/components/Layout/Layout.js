import { useSession } from "next-auth/react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import MobileNavbar from "../Shared/Navbar/MobileNavbar";

const Layout = ({ children }) => {
  const { session, status } = useSession();

  return (
    <>
      {/* Render the Navbar */}
      <Navbar />

      {/* Render the MobileNavbar component for mobile devices */}
      <MobileNavbar />

      {/* Main content container with responsive styling */}
      <div className="min-h-screen md:py-6 max-w-5xl lg:max-w-6xl mx-auto p-4 md:px-6">
        {/* Render the child components (the actual page content) here */}
        {children}
      </div>
      {/* Render the Footer */}
      <Footer />
    </>
  );
}

export default Layout;
