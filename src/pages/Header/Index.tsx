import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Index: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Index;
