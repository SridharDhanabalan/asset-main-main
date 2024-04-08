import React, { useState } from "react";
import OfficeAssetsList from "./Components/OfficeAssetsList.jsx";
import AssetManagement from "./Components/AssetManagement.jsx";
import ItemDetails from "./Components/ItemDetails.jsx";
import Employee  from "./Components/AddEmployee.jsx";
// import "./styles/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./Components/AddEmployee.jsx";
import LoginScreen from '../src/screens/LoginScreen.jsx'

import { useLocation } from 'react-router-dom';


function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [asset, setAsset] = useState(null);
  const location = useLocation();

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app-container">
      {
        location.pathname !== '/login' && (
          <aside className="sidebar-wrap">
        <OfficeAssetsList onItemClick={handleItemClick} />
      </aside>
        )
      }
      
      <main className="main-bar">
       
          <Routes>

          {/* LoginScreen */}

          <Route
              exact
              path="/login"
              element={<LoginScreen />}
            />

            <Route
              exact
              path="/"
              element={<ItemDetails item={selectedItem} />}
            />
            
            <Route
              path="/asset-management"
              element={<AssetManagement setAsset={setAsset} />}
            />

          <Route 
          path="/addemployee" element={<AddEmployee/>}/>
            {/* Add more routes as needed */}
          </Routes>
      
      </main>
    </div>
  );
}

export default App;
