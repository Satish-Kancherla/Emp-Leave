import AdminPage from "./Emp-comp/AdminPage";
import Jan from "./Emp-comp/Jan";
import Update from "./Emp-comp/Update";
import EmployeeData from "./Emp-comp/EmployeeData";
import ViewList from "./Emp-comp/ViewList";

import {BrowserRouter ,Routes,Route} from "react-router-dom";

// import AdminPage1 from "./Leave-comp/AdminPage";
import Jan1 from "./Leave-comp/Jan";
// import Update1 from "./Leave-comp/Update";
// import EmployeeData1 from "./Leave-comp/EmployeeData";
import Emplist from "./Leave-comp/Emplist";


function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AdminPage />}/>
        <Route path="/employee" element={<EmployeeData />}/>
        <Route path="/filter" element={<Jan />} />
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="viewlist" element={<ViewList />}/>

        {/* <Route path="/leave" element={ <AdminPage1 />}/> */}
        {/* <Route path="/employeelist" element={<EmployeeData1 />}/> */}
        {/* <Route path="/filterlist" element={<Jan1 />} /> */}
        {/* <Route path="/updatelist/:id" element={<Update1/>}/> */}
        {/* <Route path="/emplist" element={<Emplist />}/> */}
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
