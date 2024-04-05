import React, { useState } from "react";
import OfficeAssetsList from "./Components/OfficeAssetsList.jsx";
import AssetManagement from "./Components/AssetManagement.jsx";
import ItemDetails from "./Components/ItemDetails.jsx";
import Employee  from "./Components/AddEmployee.jsx";
import "./styles/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./Components/AddEmployee.jsx";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [asset, setAsset] = useState(null);

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app-container">
      <aside className="sidebar-wrap">
        <OfficeAssetsList onItemClick={handleItemClick} />
      </aside>
      <main className="main-bar">
       
          <Routes>
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
