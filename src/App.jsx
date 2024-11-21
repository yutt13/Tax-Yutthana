import React from "react";
import FormData from "./pages/FormData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./pages/Result";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormData />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
