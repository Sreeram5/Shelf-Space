import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFReader = ({ file, goBack }) => {
  return (
    <div>
      <button onClick={goBack}>Back to Library</button>
      <div style={{ height: "80vh" }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={file} />
        </Worker>
      </div>
    </div>
  );
};

export default PDFReader;