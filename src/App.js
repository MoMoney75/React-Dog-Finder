import './App.css';
import GetDog from './GetDog';
import Dogs from './Dogs';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'




function App() {
  return (
    <div className="App">

<BrowserRouter>

<Routes>
  <Route exact path="/dogs" element={<Dogs />} />
  <Route exact path="/dogs/:dogName"  element={<GetDog />} />  
</Routes>

</BrowserRouter>


    </div>
  );
}


export default App;
