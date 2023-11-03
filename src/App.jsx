import { Routes, Route } from "react-router-dom";
import { HOME, ROOT, SCROLL_NAVBAR } from "./constants/routes";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ScrollNavBarExample from "./pages/scrollNavBarExample/ScrollNavBarExample";



function App() {
  return (
    <Routes>
    <Route path={ROOT.route} element={<Layout />}>
      <Route path={HOME.route} element={<Home />} />
      <Route path={SCROLL_NAVBAR.route} element={<ScrollNavBarExample />} />
    </Route>
    </Routes>
  );
}



export default App;
