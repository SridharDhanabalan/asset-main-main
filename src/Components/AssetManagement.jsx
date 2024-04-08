import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const officeAssets = [
  { category: "Master", items: [{label:"Employee Master",url:'addemployee'}, {label:"Item Master",url:""},{label:" Outlet Master",url:""}, {label:"Add Asset",url:""}], editable: false },
  { category: "Asset", items: [{label:"Asign Asset", url:'asset-management'},{label:"Update Asset", url:""}], editable: false },
  { category: "Service", items: ["Self Service", "Paid Service"], editable: false },
  { category: "Record", items: ["Purchase Record", "Service Record"], editable: false },
];

function AssetManagement({ setAsset }) {
  const [formData, setFormData] = useState({
    Action: "",
    Name: "",
    "Current Device Model": "",
    "Serial Number": "",
    "Warranty type": "",
    "Warranty End date": "",
    "Employee code": "",
    "M365 License": "",
    RAM: "",
    "MAC Address": "",
    "IP Address": "",
    Location: "",
    Device: "",
    OS: "",
    "OS version": "",
    Email: "",
    Accessories: "",
    "Server add": "",
    "Purchase date": "",
    "Item value": "",
    Remarks: "",
    "Former User": "",
    "Handled by": "",
    AssetType: "", // AssetType field
    Images: [] // State to store uploaded images
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, ["Purchase date"]: e.target.value });
    setErrors({ ...errors, ["Purchase date"]: "" });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map(file => URL.createObjectURL(file));
    setFormData({ ...formData, Images: [...formData.Images, ...images] });
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...formData.Images];
    updatedImages.splice(index, 1);
    setFormData({ ...formData, Images: updatedImages });
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `Field is required`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function AssetManagement({ setAsset }) {
    const { url } = useRouteMatch();
    const navigate = useNavigate();
  
    // Your form data and state management logic here
    
    if (url.includes('login')) {
      return <LoginScreen />;
    } else if (url.includes('asset-management')) {
      return (
        <div className="asset-management">
          <h2>Enter Asset Details</h2>
          {/* Your AssetManagement component JSX */}
        </div>
      );
    } else {
      return <NoMatch />;
    }
  }
  const handleAddAsset = () => {
    const isValid = validateForm();
    if (isValid) {
      const { AssetType } = formData;
      const selectedCategory = officeAssets.find(category => category.items.includes(AssetType));
      if (selectedCategory) {
        console.log(formData);
        // Add the asset to the corresponding category
        const updatedAssets = officeAssets.map(category => {
          if (category.items.includes(AssetType)) {
            return { ...category, items: [...category.items, formData] };
          } else {
            return category;
          }
        });
        setAsset(updatedAssets);
        navigate("/asset-management");
      } else {
        setErrors({ ...errors, AssetType: "Invalid asset type" });
      }
    }
  };
  
  return (
    
    <div className="asset-management">
      <h2>Enter Asset Details</h2>
      <div className="form-container">
        {/* Existing form fields */}
        {Object.entries(formData).map(([key, value]) => {
          if (key === "AssetType") {
            return (
              <div className="form-field" key={key}>
                <label>{key}:</label>
                <select
                  name={key}
                  value={value}
                  onChange={handleChange}
                >
                <option value="">Select Asset Type</option>
                {officeAssets.map((asset, index) => (
                  <optgroup label={asset.category} key={index}>
                    {asset.items.map((item, idx) => (
                      <option key={idx} value={item} onClick={()=>navigate(item.url)}>{item.label}</option>
                    ))}
                  </optgroup>
                  ))}
                </select>
                {errors[key] && <span className="error">{errors[key]}</span>}
              </div>
            );
          } else if (key === "Images") {
            return (
              <div className="form-field" key={key}>
                <label>Upload Images:</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
                {/* Image previews */}
                <div className="image-preview">
                  <div className="image-row">
                    {formData.Images.map((image, index) => (
                      <div className="image-container" key={index}>
                        <img className="uploaded-image" src={image} alt={`Image ${index}`} />
                        <button className="cancel-button" onClick={() => handleImageDelete(index)}>X</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="form-field" key={key}>
                <label>{key}:</label>
                {key === "Purchase date" ? (
                  <input
                    type="date"
                    name={key}
                    value={value}
                    onChange={handleDateChange}
                  />
                ) : (
                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleChange}
                  />
                )}
                {errors[key] && <span className="error">{errors[key]}</span>}
              </div>
            );
          }
        })}
      </div>
      <button className="btn-value" onClick={handleAddAsset}>
        Add Asset
      </button>
    </div>
  );
}

export default AssetManagement;
