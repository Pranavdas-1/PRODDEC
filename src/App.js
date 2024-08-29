import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Notice from './Notice';
import './styles.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const time = 5000;

  const data = [
    ["Jyothirmayi Devi C",'Assistant Professor - Computer  Science Department','M. Tech in Computer Science &Engineering',' B. Tech in Computer Science & Engineering','jyothirmayi @ceconline.edu','304','Staff-in-charge of FOCES','','','1','https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FJYOTHIRMAYI%20DEVI%20C.png?alt=media&token=cc3509e1-5d77-4c20-b8a1-1c975a2a3ec9'],
    ["Princy Sugathan S",'Assistant Professor - Computer  Science Department','MTech (CUSAT 2010-2012) in Software Engineering','BTech (CEC 1998-2002) in Computer Engineering','princysugathans@ceconline.edu','Advanced Research Lab','On deputation leave for doing PhD at CEC','','','0','https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FPRINCY%20SUGATHAN%20S.png?alt=media&token=ba79a641-625b-4c68-bf57-79707d35d60f'],
    ['Betty James','Assistant Professor - Computer  Science Department','M.tech in computer science and engineering ','','Bettycec@ceconline.edu','501','','','','0','https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FBetty%20James.png?alt=media&token=446d5f4b-d714-4767-8980-cce97c6d2b0c'],
    ['Alka Vijay','Assistant Professor - Computer  Science Department','MTech in Computer Science & Engineering (2012-2014)','BTech in Computer Science and Engineering (2007-2011)','alkavijay09@gmail.com','204','Mentor of S2 C Batch','','','1','https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FAlka%20Vijay.png?alt=media&token=79448a81-e082-4d4c-98c7-c393285ab74e']
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        window.location.href = "/notice";
      }
    }, time);

    return () => clearTimeout(timer);
  }, [currentIndex, data.length]);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Profile data={data[currentIndex]} />} 
        />
        <Route 
          path="/notice" 
          element={<Notice />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
