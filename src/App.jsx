import React, { useState, useEffect } from "react";
import './App.css';
import Router from './router/Router';
import Loader from './components/Loader'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; 

  return (
    <>
      <Router />
    </>
  );
}

export default App;

// import './App.css'
// import Router from './router/Router'

// function App() {

//   return (
//     <>
//       <p>
//         <Router/>
//       </p>
//     </>
//   )
// }

// export default App
