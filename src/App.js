import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

import { Layout } from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
