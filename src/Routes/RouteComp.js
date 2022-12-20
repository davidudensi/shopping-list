import { Routes, Route } from "react-router-dom";
import CreateList from "../Pages/CreateList/CreateList";
import Home from "../Pages/Home/Home";

const RouteComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateList />} />
      </Routes>
    </>
  );
};

export default RouteComp;
