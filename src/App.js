import logo from './logo.svg';
import './App.css';
// import GetAxios from './Component/Get-Axios';
// import Create from './Component/crud-App/Create';
import Create from './Component/Create';
import { Routes,Route } from 'react-router-dom';
import Read from './Component/Read';
import Update from './Component/Update';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path='/'  element={<Read/>}></Route>
        <Route exact path='/create'  element={<Create/>}></Route>
        <Route exact path='/edit'  element={<Update/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
