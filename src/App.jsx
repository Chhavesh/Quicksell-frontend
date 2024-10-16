import { useEffect, useState } from 'react';
import './App.css';
// import UserCard from './components/UserCard/UserCard.jsx';
import Display from './components/Content/Content.jsx';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  return (
    <div className="App">
      <Navbar groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy}/>
      <Display groupBy={groupBy} sortBy={sortBy} />
      
    </div>
  );
}

export default App;
