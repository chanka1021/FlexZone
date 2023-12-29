import React from 'react'
import '../components/styles/Management.css'
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState } from 'react';

function Management() {

  const [scanResault, setScanResault] = useState(null);

  const MembersAttendence = [

    {
      name: "John Doe",
      checkIn: '14:00',
      checkOut: '',
    },
    {
      name: "John Doe",
      checkIn: '14:00',
      checkOut: '15:30',
    },
  ]

  let QrScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } });

  QrScanner.render(success, error)

  function success(res) {
    setScanResaults(res);
    QrScanner.clear();
  }
  function error(err) {
    console.warn(err);
  }

  return (
    <div className='ManagementContainer'>
      <div className='AttendenceTable'>

        <span>
          <h1>Attendence de members</h1>
        </span>

        <table className="products-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>checkIn</th>
              <th>CheckOut</th>
            </tr>
          </thead>
          <tbody>
            {MembersAttendence.map((ma, index) => (
              <tr key={index} className="product-row">
                <td>{ma.name}</td>
                <td>{ma.checkIn}</td>
                <td>{ma.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='scanArea'>
  qr scan
      </div>
    </div>
  )
}

export default Management