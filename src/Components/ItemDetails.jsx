// ItemDetails.jsx
import React from 'react';
// import '../styles/theme.css';
import { useNavigate } from "react-router-dom";
import AddEmployee from './AddEmployee';


function ItemDetails({ item }) {
  const navigate = useNavigate();

  const handleCreate=()=>{
    
  }
  return (
    <div className="item-details">
      {/* Header with title and controls */}
      <div className="header">
        <h2 className="heading">{item} Details</h2>
        <div className="controls">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="export-button">Export</button>
          <button className="export-button add-button" onClick = {()=>navigate('/asset-management')}>Add</button>
        </div>
        </div>
      <table>
        <thead>

          <tr>
            <th>Name</th>
            <th>Current Device Model</th>
            <th>Serial Number</th>
            <th>Warranty type</th>
            <th>Warranty End date</th>
            <th>Employee code</th>
            <th>M365 License</th>
            <th>Ram</th>
            <th>MAC Address</th>
            <th>IP Address</th>
            <th>Location</th>
            <th>Device</th>
            <th>OS</th>
            <th>OS version</th>
            <th>Email</th>
            <th>Accessories</th>
            <th>Server add</th>
            <th>Purchase date</th>
            <th>Item value</th>
            <th>Remarks</th>
            <th>Former User</th>
            <th>Handled by</th>
            <th>Email</th>
            <th>Images</th>
          </tr>




        </thead>
        <tbody>
          <tr>
            {item?
              <>
              <td>{item.name}</td>
            <td>{item.currentDeviceModel}</td>
            <td>{item.serialNumber}</td>
            <td>{item.warrantyType}</td>
            <td>{item.warrantyEndDate}</td>
            <td>{item.employeecode}</td>
            <td>{item.m365License}</td>
            <td>{item.ram}</td>
            <td>{item.mACAddress}</td>
            <td>{item.iPAddress}</td>
            <td>{item.location}</td>
            <td>{item.device}</td>
            <td>{item.os}</td>
            <td>{item.oSVersion}</td>
            <td>{item.eMail}</td>
            <td>{item.accessories}</td>
            <td>{item.ServerAdd}</td>
            <td>{item.purchaseDate}</td>
            <td>{item.itemValue}</td>
            <td>{item.remarks}</td>
            <td>{item.formerUser}</td>
            <td>{item.handledBy}</td>
            <td>{item.eMailEmail}</td>
            <td><img src={item.image} alt={item.name} /></td>
            </>:null}
            
            
          </tr>
        </tbody>
      </table>
      <AddEmployee onCreate={handleCreate}/>
    </div>
  );
}

export default ItemDetails;
