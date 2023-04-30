// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// //  import Dasboard from './Dasboard';
// import Navbar from "./Navbar";
// import Maindashboard from "./Maindashboard";
// import Interaction from "./Interaction";
// import Admin from "./Admin";
// import Task from "./Task";
// import Calender from "./Calender";
// import Member from "./Member";
// import Setup from "./Setup";
// import Report from "./Reort";
// import Profile from "./Profile";
// import Health from "./Health";
// import { Switch } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
     
      
//       <BrowserRouter>
//       <Navbar />
    
//       {/* <Dasboard /> */}
//         <Routes>
        
//           <Route path="/dashboard" element={<Maindashboard />} />
//           <Route path="/interaction" element={<Interaction />} />
//           <Route path="/task" element={<Task />} />
//           <Route path="/calender" element={<Calender />} />
//           <Route path="/member" element={<Member />} />
//           <Route path="/report" element={<Report />} />
//           <Route path="/admin" element={<Admin />} />
//          <Route path="/setup" element={<Setup />} />
         
//          <Route path="/profile" element={<Profile />} />
//          <Route path="/health" element={<Health />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import Maindashboard from "./Maindashboard";
import Interaction from "./Interaction";
import Admin from "./Admin";
import Task from "./Task";
import Calender from "./Calender";
import Member from "./Member";
import Setup from "./Setup";
import Report from "./Reort";
import Profile from "./Profile";
import Health from "./Health";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/dashboard" element={<Maindashboard />} />
          <Route path="/interaction" element={<Interaction />} />
          <Route path="/task" element={<Task />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/member" element={<Member />} />
          <Route path="/report" element={<Report />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/health" element={<Health />} />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

