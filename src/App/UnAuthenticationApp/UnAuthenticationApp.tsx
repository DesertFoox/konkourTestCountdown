import React from "react";

import { Routes, Route } from "react-router-dom";

import Landing from "../../Screens/Landing/Landing";

const UnAuthenticationApp: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
    </Routes>
  );
};

export default UnAuthenticationApp;
