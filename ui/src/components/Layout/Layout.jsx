import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children,routes }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header routes={routes} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
  };
export default Layout;
