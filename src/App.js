import React, { useState } from "react";
import Library from "./components/Library";
import UploadPDF from "./components/UploadPDF";

function App() {
  // This state holds all the PDFs in the library
  const [pdfs, setPdfs] = useState([]);

  // Function to add a new PDF to the library
  const addPdf = (pdf) => setPdfs((prev) => [...prev, pdf]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>ShelfSpace MVP</h1>

      {/* Upload PDF section */}
      <UploadPDF addPdf={addPdf} />

      {/* PDF Library section */}
      <Library pdfs={pdfs} />
    </div>
  );
}

export default App;