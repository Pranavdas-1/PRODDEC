import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Notice from './Notice';
import './styles.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const time = 5000;

  // Original data array
  const data = [
    ['Alka Vijay', 'Assistant Professor - Computer Science Department', 'MTech in Computer Science & Engineering (2012-2014)', 'BTech in Computer Science and Engineering (2007-2011)', 'alkavijay09@gmail.com', '204', 'Mentor of S2 C Batch', '', '', '1', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FAlka%20Vijay.png?alt=media&token=79448a81-e082-4d4c-98c7-c393285ab74e'],
    ['Ameena A', 'Assistant Professor - Computer Science Department', 'M.Tech in computer science and engineering (2013-15)', 'B.tech in computer science and engineering (2008-12)', 'ameenacec@ceconline.edu', '516', '', '', '', '0', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FAmeena%20A.png?alt=media&token=9b979590-9d63-4930-99bd-4c00aa08215b'],
    ['Anjitha P', 'Assistant Professor - Computer Science Department', 'BTech in Computer Science and Engineering (2011-2015)', 'MTech in Image Processing (2016-2018)', 'anjitha@ceconline.edu', '516', '', '', '', '0', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FAnjitha%20P.png?alt=media&token=f9f96f81-4492-4513-a7ec-8b0fe0d1aa4c'],
    ['Angel Thankam Thomas', 'Assistant Professor - Computer Science Department', 'M. Tech in Image Processing (2015-2017)', 'B. Tech in Computer Science and Engineering', 'angelcec@ceconline.edu', '516', 'ASAP coordinator', '', '', '1', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FAngel%20Thankam%20Thomas.png?alt=media&token=24a0b6ae-8e8f-4cd8-b17f-031bf3d26f4a'],
    ['Betty James', 'Assistant Professor - Computer Science Department', 'M.tech in computer science and engineering', '', 'Bettycec@ceconline.edu', '501', '', '', '', '0', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FBetty%20James.png?alt=media&token=446d5f4b-d714-4767-8980-cce97c6d2b0c'],
    ['Chinchu M Pillai', 'Assistant Professor - Computer Science Department', 'MTech in Image Processing', 'BTech in Computer Science and Engineering', 'chinchumpillai@ceconline.edu', '516', 'Mentor - S4', '', '', '1', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FChinchu%20M%20Pillai.png?alt=media&token=4c114a75-ee6c-403d-be69-e48774553bd2'],
    ['Jyothirmayi Devi C', 'Assistant Professor - Computer Science Department', 'M. Tech in Computer Science & Engineering', 'B. Tech in Computer Science & Engineering', 'jyothirmayi@ceconline.edu', '304', 'Staff-in-charge of FOCES', '', '', '1', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FJYOTHIRMAYI%20DEVI%20C.png?alt=media&token=cc3509e1-5d77-4c20-b8a1-1c975a2a3ec9'],
    ['Leya G', 'Assistant Professor - Computer Science Department', 'MTech in Computer and Information Science', 'BTech in Computer Science and Engineering', 'leya@ceconline.edu', '204', 'Mentor of S5C Batch', '', '', '1', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FLeya%20G.png?alt=media&token=498fbb89-b06e-4670-bec2-a6b0d52f3952'],
    ['Nasseena N', 'Assistant Professor - Computer Science Department', 'MTech in Computer Science and Engineering', 'BTech in Computer Science and Engineering', 'nasseenacec@ceconline.edu', '516', 'Mentor of S2 D (2023-27 Batch)', '', '', '1', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FNasseena%20N.png?alt=media&token=5a579106-3506-4f14-b13b-b6d5fbce2aaa'],
    ['Premy P Jacob', 'Assistant Professor - Computer Science Department', 'MTech in CSE (2020-2022)', 'BTech in CSE (2013-2017)', 'premypjacob95@gmail.com', '304', '', '', '', '0', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FPremy%20P%20Jacob.png?alt=media&token=2a4dc74e-6a9e-4c74-844a-7f7c9d15b6ba'],
    ['Princy Sugathan S', 'Assistant Professor - Computer Science Department', 'MTech (CUSAT 2010-2012) in Software Engineering', 'BTech (CEC 1998-2002) in Computer Engineering', 'princysugathans@ceconline.edu', 'On deputation leave for doing PhD at CEC', '', '', '', '0', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FPRINCY%20SUGATHAN%20S.png?alt=media&token=ba79a641-625b-4c68-bf57-79707d35d60f'],
    ['Reshma Ann Mathews', 'Assistant Professor - Computer Science Department', 'BTech in Information Technology', 'MTech in Computer Science with Specialization in Cyber Forensics and Information Security', 'reshmamathew@ceconline.edu', '-', 'Not applicable', '', '', '0', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FReshma%20Ann%20Mathews.png?alt=media&token=8efacc9b-46e3-4bca-b208-07065b04683a'],
    ['Reshma Raj KS', 'Assistant Professor - Computer Science Department', 'MTech in Cyber Forensics and Information Security (2014-2016)', 'BTech in Computer Science and Engineering (2010-2014)', 'reshmaraj@ceconline.edu', '', '', '', '', '0', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FReshma%20Raj%20K%20S.png?alt=media&token=0e875a67-1c48-4269-8aa8-7a46acd5e5de'],
    ['Rosy K. Philip', 'Assistant Professor - Computer Science Department', 'MTech in Computer Science and Engineering (2013-15)', 'BTech in Computer Science and Engineering (2008-12)', 'rosycec@ceconline.edu', '516', 'Staff advisor of computer science 2023-2027 batch', '', '', '1', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FRosy%20K%20Philip.png?alt=media&token=1f92a691-46f9-4b6d-a234-f9c096b2c969'],
    ['Sreelekshmi K R', 'Assistant Professor - Computer Science Department', 'MTech in Image Processing', 'BTech in Computer Engineering', 'sreelekshmikr91@gmail.com', '516', 'Staff Advisor CS 2020-2024', 'DQAC Member Computer Engineering Department', '', '1', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FSreelekshmi%20K%20R.png?alt=media&token=453084f5-40e5-4651-b4ee-e00bae99f058'],
    ['Vishnu S Kumar', 'Assistant Professor - Computer Science Department', 'MTech in Computer Science and Engineering (2015-2017)', 'BTech in Computer Science and Engineering (2011-2015)', 'vishnucec@ceconline.edu', '204', '', '', '', '0', 'https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2FVishnu%20S%20Kumar.png?alt=media&token=b50821d4-87b5-4c00-921f-dcd90ed4add8']
];



  // Create an array of image URLs
  const imageUrls = data.map(item => item[item.length - 1]);

  useEffect(() => {
    // Preload all images
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });

    const timer = setTimeout(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        window.location.href = "/notice";
      }
    }, time);

    return () => clearTimeout(timer);
  }, [currentIndex, data.length, imageUrls]);

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
