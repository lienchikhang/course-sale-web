import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPrimary from "./layouts/LayoutPrimary";
import HomeTab from "./components/HomeTab";
import HomeRoadMap from "./components/HomeRoadMap";
import HomePosts from "./components/HomePosts";
import DetailCoursePage from "./components/pages/DetailCoursePage";
import LearningPage from "./components/pages/LearningPage";
import LayoutSecondary from "./layouts/LayoutSecondary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPrimary />}>
            <Route path="" element={<HomeTab />} />
            <Route path="roadmap" element={<HomeRoadMap />} />
            <Route path="posts" element={<HomePosts />} />
            {/**not registed course yet*/}
            <Route path="courses/:courseId" element={<DetailCoursePage />} />
          </Route>
          {/**already registed course */}
          <Route path="learning" element={<LayoutSecondary />}>
            <Route path=":courseId" element={<LearningPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
