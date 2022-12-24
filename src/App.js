import "./App.css";

import routse from "./Components/routes";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routse);

  return <div className="App">{router}</div>;
}

export default App;
