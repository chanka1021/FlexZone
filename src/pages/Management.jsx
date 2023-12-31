import React, { useState } from 'react';
import '../components/styles/Management.css';
import { QrReader } from 'react-qr-reader';
import styled from 'styled-components';

function Management() {
  const [membersAttendance, setMembersAttendance] = useState([
    {
      name: "John Doe",
      checkIn: '14:00',
    },
    {
      name: "Jane Doe",
      checkIn: '14:00',
    },
  ]);

  const [data, setData] = useState('No result');
  const [showMessage, setShowMessage] = useState(false);

  function updateMemberAttendanceTable(name) {
    const info = { name: name, checkIn: new Date().getHours() + ":" + new Date().getMinutes() };
    setMembersAttendance([...membersAttendance, info]);
  }

  function approve(data) {
    // check qr
    // get qr member
    // get name of member
    // check his if sub is valid
    updateMemberAttendanceTable("Achraf");
    setShowMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  const Message = styled.div`
    background-color: #a0dda0;
    padding: 10px;
    width: fit-content;
  `;

  return (
    <div className='ManagementContainer'>
      <div className='AttendenceTable'>
        <span>
          <h1>Présence des membres aujourd'hui</h1>
        </span>
        <table className="products-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>CheckIn</th>
              <th>CheckOut</th>
            </tr>
          </thead>
          <tbody>
            {membersAttendance.map((ma, index) => (
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
        <>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                approve(data);
                console.log(result?.text);
              }
              if (!!error) {
                console.info(error);
              }
            }}
          />
          {showMessage && <Message>Bienvenu</Message>}
        </>
      </div>
    </div>
  );
}

export default Management;
