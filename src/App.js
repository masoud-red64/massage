import "./App.css";

import routse from "./Components/routes";
import { useRoutes } from "react-router-dom";
import { useState, Suspense } from "react";

function App() {
  const router = useRoutes(routse);

  return (
    <div className="App">
      <Suspense
        fallback={
          <div class="loading">
            درحال دریافت اطلاعات
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        }
      >
        {router}
      </Suspense>
    </div>
  );
}

export default App;
