import React, { useState, useEffect } from 'react';

function Profile({ data }) {
  const [name, position, acade1, acade2, email, room, pos1, pos2, pos3, showPositions, image] = data;
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload the image and set its loaded state
  useEffect(() => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
      setIsLoaded(true); // Set to true when the image has loaded
    };
  }, [image]);

  return (
    <div>
      <div className="bar"></div>
      <div className="header">
        <div className="text">
          <h1 id="changingName">{name}</h1>
          <h5 className="position">{position}</h5>
        </div>
      </div>
      <img
        className="cec"
        src="https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2Fcec%20logo.png?alt=media&token=bc582e27-fbf9-46be-9631-259988f78dfc"
        alt="CEC Logo"
      />
      <div className="main">
        <div className="main_left">
          {isLoaded ? (
            <img name="slide" className="image" src={image} alt={name} />
          ) : (
            <div>Loading Image...</div> // Show loading text while the image is being loaded
          )}
        </div>
        <div className="main_right">
          <div className="acca">
            <h4>ACADEMIC QUALIFICATIONS</h4>
            <ul className="point">
              <li id="acade1">{acade1}</li>
              {acade2 && <li id="acade2">{acade2}</li>}
            </ul>
          </div>
          <div className="cont">
            <span className="spa">
              <p className="mail">E-mail ID :</p>
              <p id="mail_1">{email}</p>
            </span>
            <span className="spa">
              <p className="mail">Room No :</p>
              <p id="mail_2">{room}</p>
            </span>
          </div>
          {showPositions && (
            <div>
              <div className="poss">
                <p className="posi">Positions Handled</p>
              </div>
              <div id="myDiv">
                <ul className="posi_1">
                  {pos1 && <li id="posi-1">{pos1}</li>}
                  {pos2 && <li id="posi-2">{pos2}</li>}
                  {pos3 && <li id="posi-3">{pos3}</li>}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="pro">
        <h3>BY PRODDEC CEC</h3>
      </div>
      <div className="bar_down"></div>
    </div>
  );
}

export default Profile;
