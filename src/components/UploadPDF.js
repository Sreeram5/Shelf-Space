import React from "react";

const UploadPDF = ({ addPdf }) => {
  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      addPdf({ title: file.name, url });
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFile} />
    </div>
  );
};

export default UploadPDF;