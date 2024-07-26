import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SkillsPage } from "./pages/SkillsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
