import React from "react";
import BottomNavigation from "../components/common/BottomNavigation";

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="mb-4 flex-1">{children}</main>
      <BottomNavigation />
    </div>
  );
};

export default DefaultLayout;