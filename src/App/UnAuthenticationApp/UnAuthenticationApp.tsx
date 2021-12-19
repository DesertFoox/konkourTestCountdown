import React from "react";

import { Routes, Route } from "react-router-dom";

import UnAuthenticationRoutes from "../../Utils/Json/Routes/UnAuthenticationRoutes";

const UnAuthenticationApp: React.FC = (): JSX.Element => {
  return (
    <Routes>
      {UnAuthenticationRoutes.map((item) => (
        <Route path={item.route} element={<item.componentName/>} />
      ))}
    </Routes>
  );
};

export default UnAuthenticationApp;
