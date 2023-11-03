import { Routes, Route } from "react-router-dom";
import { DARK_MODE, HOME, ROOT, SCROLL_NAVBAR } from "./constants/routes";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ScrollNavBarExample from "./pages/scrollNavBarExample/ScrollNavBarExample";
import DarkModeExample from "./pages/darkModeExample/DarkModeExample";



function App() {
  return (
    <Routes>
    <Route path={ROOT.route} element={<Layout />}>
      <Route path={HOME.route} element={<Home />} />
      <Route path={SCROLL_NAVBAR.route} element={<ScrollNavBarExample />} />
      <Route path={DARK_MODE.route} element={<DarkModeExample />} />
    </Route>
    </Routes>
  );
}



export default App;
