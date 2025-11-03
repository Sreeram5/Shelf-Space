import React, { useState } from "react";
import PDFReader from "./PDFReader";

const Library = ({ pdfs }) => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  if (selectedPdf) {
    return <PDFReader file={selectedPdf} goBack={() => setSelectedPdf(null)} />;
  }

  return (
    <div>
      <h2>ShelfSpace Library</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
              width: "150px",
              cursor: "pointer",
            }}
            onClick={() => setSelectedPdf(pdf.url)}
          >
            <p>{pdf.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;