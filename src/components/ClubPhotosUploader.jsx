import React, { useState } from "react";
import axios from "axios";
import Image from "./Image";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdDelete } from "react-icons/md";



import "../components/styles/AddClub-PhotosUploader.css";

export default function ClubPhotosUploader({ onChange }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  function handleFileChange(ev) {
    const files = ev.target.files;
    const selectedFilesArray = Array.from(files);
    
    // Use the functional form of setState to ensure the updated state
    setSelectedFiles(prevSelectedFiles => [...prevSelectedFiles, ...selectedFilesArray]);

    // Pass the updated state to the onChange callback
    onChange([...selectedFiles, ...selectedFilesArray]);
  }

  function selectAsMainPhoto(ev,index) {
    ev.preventDefault();
    setSelectedFiles([selectedFiles[index],...selectedFiles.filter((photo,i) => i !== index)]);
    onChange(selectedFiles)
  }

  function removePhoto(ev,index) {
    ev.preventDefault();
    setSelectedFiles([...selectedFiles.filter((photo,i) => i !== index)]);
    onChange(selectedFiles)
  }
  return (
    <>
      <div className="photo-container">
        {selectedFiles.length > 0 &&
          selectedFiles.map((file, index) => (
            <div className="photo-container-item" key={index}>
               <button onClick={ev => removePhoto(ev,index)} className="remove-btn">
            <MdDelete/>
            </button>
              <img
                className="photo-item"
                src={URL.createObjectURL(file)}
                alt=""
              />
               <button onClick={ev => selectAsMainPhoto(ev,index)} className="pin-btn">
              {index === 0 && (
                <FaStar/>
              )}
              {index !== 0 && (
               <CiStar/>
              )}
            </button>
            </div>
          ))}
        <label className="upload-container">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          Select
        </label>
      </div>
    </>
  );
}
