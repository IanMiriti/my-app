import logo from './logo.svg';
import './App.css';
 
import FunctionalComp from './Components/FunctionalComp';
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
 function App() {
  return (
  <div>
    <h1> Hello! Welcome to Simplilearn</h1>
    <h2>This video is about components</h2>
    <FunctionalComp/>
    <ClassComp/>
    <ClassComp1/>
    <Click/>  
    <Counter/> 
  </div>
   
   





  );
}

export default App;
