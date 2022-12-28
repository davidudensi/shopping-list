import { Routes, Route } from "react-router-dom";
import CreateList from "../Pages/CreateList/CreateList";
import Home from "../Pages/Home/Home";
import Utilize from "../Pages/Utilize/Utilize";

const RouteComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateList />} />
        <Route path="/utilize" element={<Utilize />} />
      </Routes>
    </>
  );
};

export default RouteComp;
