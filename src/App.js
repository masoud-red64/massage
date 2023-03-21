import "./App.css";

import routse from "./Components/routes";
import { useRoutes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const router = useRoutes(routse);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    window.addEventListener('load', setLoading(false))
  },[])

  return <div className="App">
    {loading ? (
          <div class="loading">
            درحال دریافت اطلاعات
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        )
      :router
      }
</div>;
}

export default App;
