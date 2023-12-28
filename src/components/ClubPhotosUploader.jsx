import axios from "axios";
import {useState} from "react";
import Image from "./Image.jsx";
import "../components/styles/AddClub-PhotosUploader.css"

export default function ClubPhotosUploader({addedPhotos,onChange}) {
  const [photoLink,setPhotoLink] = useState('');
  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const {data:filename} = await axios.post('/rooms/upload-by-link', {link: photoLink});
    onChange(prev => {
      return [...prev, filename];
    });
    setPhotoLink('');
  }
  
  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }
    axios.post('/rooms/upload', data, {
      headers: {'Content-type':'multipart/form-data'}
    }).then(response => {
      const {data:filenames} = response;
      onChange(prev => {
        return [...prev, ...filenames];
      });
    })
  }
  function removePhoto(ev,filename) {
    ev.preventDefault();
    onChange([...addedPhotos.filter(photo => photo !== filename)]);
  }
  function selectAsMainPhoto(ev,filename) {
    ev.preventDefault();
    onChange([filename,...addedPhotos.filter(photo => photo !== filename)]);
  }
  return (
    <>
      <div className="photo-input">
        <input value={photoLink}
               onChange={ev => setPhotoLink(ev.target.value)}
               type="text" placeholder={'Add using a link ....jpg'}/>
        <button onClick={addPhotoByLink} className="photo-input-btn">Add&nbsp;photo</button>
      </div>
      <div className="photo-container">
        {addedPhotos.length > 0 && addedPhotos.map(link => (
          <div className="photo-container-item" key={link}>
            <Image className="photo-item" src={link} alt=""/>
            <button onClick={ev => removePhoto(ev,link)} className="remove-btn">
            <i className="fa-solid fa-trash-can image-uploader-icons"></i>
            </button>
            <button onClick={ev => selectAsMainPhoto(ev,link)} className="pin-btn">
              {link === addedPhotos[0] && (
                <i className="fa-solid fa-star image-uploader-icons"></i>
              )}
              {link !== addedPhotos[0] && (
                <i className="fa-regular fa-star image-uploader-icons"></i>
              )}
            </button>
          </div>
        ))}
        <label className="upload-container">
          <input type="file" multiple className="hidden" onChange={uploadPhoto} />
          <i className="fa-solid fa-cloud-arrow-up"></i>
          Upload
        </label>
      </div>
    </>
  );
}