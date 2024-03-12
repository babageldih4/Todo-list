import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "../All";
import Done from "../Done";
import Pending from "../Pending";
import Todo from "../Todo";
import Index from "../../pages/Header/Index";

const RouterList: FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<All />} />
            <Route path="/done" element={<Done />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default RouterList;
