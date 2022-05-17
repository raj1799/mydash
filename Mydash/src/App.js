
import './App.css';
import Register from './Components/Register/Register';
import BarOutput from './Components/BarOutput/BarOutput';



import './Assests/font-awesome/css/font-awesome.min.css';

import {BrowserRouter,Routes, Route} from 'react-router-dom';




function App(){
   return (<div className="App">
  <BrowserRouter>
 
  <Routes>
     <Route path="/" element={<Register/>}/>
     <Route path="/bar" element={<BarOutput/>}/>
     
   
    
   
  
  </Routes>
  </BrowserRouter>
   
   </div>)
}

export default App;