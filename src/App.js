import logo from './logo.svg';
import './App.css';
import BasicNode from './BasicNode.js';
import {useState} from 'react';

function App() {
  const [currNode, setCurrNode] = useState(0);
  return (
    <BasicNode id={currNode} setCurrNode={setCurrNode}/>
  );
}

export default App;
