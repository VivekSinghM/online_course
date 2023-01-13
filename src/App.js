import './App.css';
import Navbar from './component/navigation/Navbar';
import SideNav from './component/navigation/SideNav';
import Knowledge from './component/Knowledge/Knowledge';
import { useContext, useEffect } from 'react';
import { CourseContext } from './context/courseProvider';
import { data } from './JSON/course';


function App() {
  const {setAllCourse} = useContext(CourseContext);
  useEffect(()=>{
    setAllCourse(data.course)
  },[])
  return (
      <>
        <div className='row mx-0' style={{minWidth:'605px'}}>
        <SideNav/>
        <div className='col p-0'>
          <Navbar/>
        <Knowledge/>
          </div>
        </div>
      </>
  );
}

export default App;
