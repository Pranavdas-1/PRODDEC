import React, { useEffect } from 'react';

function Notice() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="bar1"></div>
      <div className="notice_header">
        <div className="text">
          <h1>Notice</h1>
        </div>
      </div>
      <img className="cec" src="https://firebasestorage.googleapis.com/v0/b/teachers-screen.appspot.com/o/images%2Fcec%20logo.png?alt=media&token=bc582e27-fbf9-46be-9631-259988f78dfc" alt="CEC Logo" />
      <div className="notice_main">
        <div className="notice">
          <div className="notice_head">
            <p className="notice_name">Notice</p>
            <p className="notice_date">21-12-23</p>
          </div>
          <div className="notice_cont">
            <p className="noti_text">Due to some technical reasons, the Christmas Celebration Organized by College Union is cancelled.</p>
          </div>
        </div>
      </div>
      <div className="notice_main">
        <div className="notice">
          <div className="notice_head">
            <p className="notice_name">Notice</p>
            <p className="notice_date">21-12-23</p>
          </div>
          <div className="notice_cont">
            <div>
              <p className="noti_text">The College Union has organized a festive Christmas celebration on 22-12-2023 at our college premises. The Schedule for the celebration includes various activities such as:</p>
            </div>
            <table>
              <tr>
                <th>Event</th>
                <th>Time</th>
              </tr>
              <tr>
                <td>Event Inauguration (Tree Lighting)</td>
                <td>9:00 AM</td>
              </tr>
              <tr>
                <td>Carol Song Competition</td>
                <td>9:30 AM</td>
              </tr>
              <tr>
                <td>Thambolam</td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>Best Santa Competition</td>
                <td>11:15 AM</td>
              </tr>
              <tr>
                <td>Games</td>
                <td>12:00 PM</td>
              </tr>
              <tr>
                <td>Thambolam</td>
                <td>1:00 PM</td>
              </tr>
            </table>
            <p className="noti_text">Let's come together to make this Christmas celebration a time of joy, unity, and shared happiness.</p>
          </div>
        </div>
      </div>
      <div className="pro">
        <h3>BY PRODDEC CEC</h3>
      </div>
      <div className="bar_down2"></div>
    </div>
  );
}

export default Notice;
