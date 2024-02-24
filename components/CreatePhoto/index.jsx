"use client";
import React, { useContext, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";
import { idContext } from "@/context/IdContext";
import Image from "next/image";
import { REST } from "@/constants/enpoint";
import { request } from "@/request";

import "./CreatePhoto.scss";

const CreatePhoto = () => {
  const { idProducts } = useContext(idContext);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
  };

  const handleUpload = async () => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      formData.id = Number(idProducts);

      try {
        const res = await request.post(REST.IMAGES, formData); 
      } catch (err) {}
    }
  };

  return (
    <div className="form_content">
      <div className="form_controls">
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          {selectedFiles.map((file, index) => (
            <Image
              style={{ borderRadius: "10px" }}
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Preview ${index + 1}`}
              width={120}
              height={100}
            />
          ))}
        </div>
        <Button
          className="upload_img"
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <input
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileInputChange}
            required
          />
        </Button>

        <Button
          variant="contained"
          style={{
            backgroundColor: "var(--yellow)",
            padding: "10px 20px",
          }}
          className="button_img_upload"
          type="submit"
          onClick={handleUpload}
        >
          Create photo
        </Button>
      </div>

      {/* <div></div> */}
    </div>
  );
};

export default CreatePhoto;
