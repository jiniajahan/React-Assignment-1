import './App.css';
import { useState } from 'react';
import MyComponent from '../src/MyComponent';

function App() {

 const [page, setPage] = useState({
  title: '',
  content:''
 });

 const navigationClicked = (clickedPage)=>{
  setPage({
    title: clickedPage.title,
    content: clickedPage.content
  });
 };


  return (
    <div className="App">
      <div className="nav">
        <button onClick={() =>navigationClicked({title: 'home', content:'this is our home content'})}>Home</button>
        <button onClick={() =>navigationClicked({title: 'profile', content:'this is our profile content'})}>Profile</button>
     </div>
     <MyComponent page={page} />
    </div>
  );
}

export default App;
