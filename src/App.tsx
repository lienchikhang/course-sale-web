import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutPrimary from "./layouts/LayoutPrimary";
import HomePage from "./components/pages/HomePage";
import HomeTab from "./components/HomeTab";
import HomeRoadMap from "./components/HomeRoadMap";
import HomePosts from "./components/HomePosts";
import DetailCoursePage from "./components/pages/DetailCoursePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPrimary />}>
            {/* <Route path="" element={<Navigate to="home" />} /> */}
            <Route path="" element={<HomeTab />} />
            <Route path="roadmap" element={<HomeRoadMap />} />
            <Route path="posts" element={<HomePosts />} />
            <Route path="courses/:courseId" element={<DetailCoursePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
