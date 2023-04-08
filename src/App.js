import Active from './component/Active';
import './App.css';
import All from './component/All';
import Complete from './component/complete';
import { Route, Routes , Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <div class="container">
        <Link to ="/All" className='all'>All</Link>
        <Link to ="/active" className='active'>Active</Link>
        <Link to ="/complete" className='complete'>Complete</Link>
      </div>

      <Routes>
        <Route path="/All" element ={<All/>} />
        <Route path="/active" element ={<Active/>} />
        <Route path="/complete" element ={<Complete/>} />
      </Routes>



      {/* <Active/>
      <All/>
      <Complete/> */}

      
    </div>
  );
}

export default App;
