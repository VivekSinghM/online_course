import logo from './logo.svg';
import './App.css';
import Navbar from './component/navigation/Navbar';
import SideNav from './component/navigation/SideNav';

function App() {
  return (
      <>
        <div className='row mx-0'>
        <SideNav/>
        <div className='col'><Navbar/></div>
        </div>
      </>
  );
}

export default App;
