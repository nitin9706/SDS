// Utility functions for the System Design Simulator

import jsPDF from "jspdf";
import { toPng } from "html-to-image";

/**
 * Export the current canvas as a PDF
 */
export const exportAsPDF = () => {
  const node = document.getElementById("react-flow-wrapper");
  if (!node) {
    console.error("Canvas element not found");
    return;
  }

  toPng(node)
    .then((dataUrl) => {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [node.offsetWidth, node.offsetHeight],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, node.offsetWidth, node.offsetHeight);
      pdf.save(`react-flow${Date.now()}.pdf`);
    })
    .catch((error) => {
      console.error("Error exporting PDF:", error);
    });
};
