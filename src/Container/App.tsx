import React from "react";
import { ToastContainer } from "react-toastify";

import UnAuthenticationApp from "../App/UnAuthenticationApp/UnAuthenticationApp";

function App() {
  return (
    <div className="App">
      <UnAuthenticationApp />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
