import "./App.css";
import { useContext, useEffect } from "react";
import { CourseContext } from "./context/courseProvider";
import { data } from "./JSON/course";
import Layout from "./component/Layout";
import { Navigate, Route, Routes } from "react-router";
import Knowledge from "./component/Knowledge/Knowledge";

function App() {
  const { setAllCourse } = useContext(CourseContext);
  useEffect(() => {
    setAllCourse(data.course);
  }, []);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/*" element={<Navigate to="/knowladge" />}/>
          <Route path="/knowladge" element={<Knowledge />}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
