import React, { useState } from 'react';
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

/* function AddGroupForm({ onAddGroup }) {
   // const [groupName, setGroupName] = useState('');
    //const [showInput, setShowInput] = useState(false);

   // const handleSubmit = (e) => {
       // e.preventDefault();
       // if (!groupName.trim()) return;
       // onAddGroup(groupName);
      //  setGroupName('');
      //  setShowInput(false);
    };

    /* return (
        <div>
            {!showInput && (
                <button onClick={() => setShowInput(true)}>Add Group</button>
            )} 
            {showInput && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter group name"
                        value={groupName}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add</button>
                    <button onClick={() => setShowInput(false)}>Cancel</button>
                </form>
            )}
        </div>
    );}
    
    <AddGroupForm onAddGroup={handleAddGroup} /> - give this in  return 
    */


function OfficeAssetsList({ onItemClick }) {
    const navigate = useNavigate();


    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [clickedCategory, setClickedCategory] = useState(null);
    const [groups, setGroups] = useState([
        { category: "Master", items: [{label:"Employee Master",url:'addemployee'}, {label:"Item Master",url:""},{label:" Outlet Master",url:""}, {label:"Add Asset",url:""}], editable: false },
        { category: "Asset", items: [{label:"Asign Asset", url:'asset-management'},{label:"Update Asset", url:""}], editable: false },
        { category: "Service", items: ["Self Service", "Paid Service"], editable: false },
        { category: "Record", items: ["Purchase Record", "Service Record"], editable: false },
        //{ category: "Office Equipment", items: ["Monitors","Laptops"], editable: false },
       // { category: "Office Supplies", items: ["Paper", "Pens", "Pencils", "Markers", "Staplers and staples", "Paper clips", "Sticky notes", "Envelopes", "File folders", "Binders"], editable: false },
        //{ category: "Stationery", items: ["Letterheads", "Business cards", "Notebooks", "Calendars", "Planners"], editable: false },
        //{ category: "Office Appliances", items: ["Coffee makers", "Microwaves", "Refrigerators"], editable: false },
        //{ category: "Office Decor", items: ["Wall art", "Plants or planters", "Decorative items", "Whiteboards or corkboards"], editable: false },
        //{ category: "Safety and Security Equipment", items: ["Fire extinguishers", "Smoke detectors", "First aid kits", "Access control systems"], editable: false },
        //{ category: "Office Documentation", items: ["Employee manuals", "Policies and procedures documents", "Contracts and agreements", "Financial documents", "Compliance documents"], editable: false },
        //{ category: "Office Consumables", items: ["Printer ink or toner cartridges", "Batteries", "Coffee, tea, snacks"], editable: false }
    ]);

    const handleMouseEnter = (category) => {
        setHoveredCategory(category);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    const handleClick = (category) => {
        if (clickedCategory === category) {
            setClickedCategory(null);
        } else {
            setClickedCategory(category);
        }
    };

   /*  const handleAddGroup = (groupName) => {
        setGroups([...groups, { category: groupName, items: [], editable: false }]);
    }; */

    return (
        <div className="sidebar">
            <h1>AMS</h1>
            <h4>Asset Management System </h4>
            <ul className="office-assets-list">
                {groups.map((assetCategory, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => handleMouseEnter(assetCategory.category)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="category-button" onClick={() => handleClick(assetCategory.category)}>
                            {assetCategory.category}
                        </button>
                        {(hoveredCategory === assetCategory.category || clickedCategory === assetCategory.category) && (
                            <ul className="items-list">
                                {assetCategory.items.map((item, idx) => (
                                    <li
                                    key={idx}
                                    onClick={() =>{ onItemClick(item);navigate(item.url)}}
                                >
                                    {item.label}
                                </li>
                            ))}
                             
                        </ul>
                    )}
                    {assetCategory.editable && (
                        <button onClick={() => { /* Logic to delete the group */ }}>
                            Delete Group
                        </button>
                    )}
                </li>
            ))}
        </ul>
    </div>
);
}

export default OfficeAssetsList;
