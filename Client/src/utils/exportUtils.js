// Utility functions for the System Design Simulator

import jsPDF from "jspdf";
import { toPng } from "html-to-image";

/**
 * Export the current canvas as a PDF using html-to-image
 * @param {Object} reactFlowInstance - The React Flow instance
 * @param {Array} nodes - Current nodes
 * @param {Array} edges - Current edges
 * @returns {Promise<void>}
 */
export const exportAsPDF = async (
  reactFlowInstance,
  nodes = [],
  edges = [],
) => {
  try {
    if (!reactFlowInstance) {
      throw new Error("React Flow instance not available");
    }

    // Get the React Flow DOM element
    const reactFlowElement = document.querySelector(".react-flow");

    if (!reactFlowElement) {
      throw new Error("React Flow element not found");
    }

    // Calculate bounds of all nodes to determine export area
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    nodes.forEach((node) => {
      const nodeWidth = 200; // Approximate node width
      const nodeHeight = 100; // Approximate node height

      minX = Math.min(minX, node.position.x);
      minY = Math.min(minY, node.position.y);
      maxX = Math.max(maxX, node.position.x + nodeWidth);
      maxY = Math.max(maxY, node.position.y + nodeHeight);
    });

    // Add padding
    const padding = 50;
    minX = Math.max(0, minX - padding);
    minY = Math.max(0, minY - padding);
    maxX += padding;
    maxY += padding;

    const width = Math.max(800, maxX - minX); // Minimum width
    const height = Math.max(600, maxY - minY); // Minimum height

    // Convert the React Flow element to PNG
    const dataUrl = await toPng(reactFlowElement, {
      quality: 0.95,
      width: width,
      height: height,
      backgroundColor: "#0b0b17", // Match the app background
      style: {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "#0b0b17",
      },
      filter: (node) => {
        // Filter out controls and minimap for cleaner export
        return (
          !node.classList?.contains("react-flow__controls") &&
          !node.classList?.contains("react-flow__minimap")
        );
      },
    });

    // Create PDF with proper dimensions
    const pdf = new jsPDF({
      orientation: width > height ? "landscape" : "portrait",
      unit: "mm",
      format: "a4",
    });

    // Calculate dimensions to fit A4
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm

    const imgAspectRatio = width / height;
    const pageAspectRatio = pageWidth / pageHeight;

    let imgWidth, imgHeight;

    if (imgAspectRatio > pageAspectRatio) {
      // Image is wider than page
      imgWidth = pageWidth;
      imgHeight = pageWidth / imgAspectRatio;
    } else {
      // Image is taller than page
      imgHeight = pageHeight;
      imgWidth = pageHeight * imgAspectRatio;
    }

    // Center the image on the page
    const xOffset = (pageWidth - imgWidth) / 2;
    const yOffset = (pageHeight - imgHeight) / 2;

    // Add image to PDF
    pdf.addImage(dataUrl, "PNG", xOffset, yOffset, imgWidth, imgHeight);

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-");
    const filename = `system-design-${timestamp}.pdf`;

    // Save the PDF
    pdf.save(filename);

    console.log("PDF exported successfully:", filename);
  } catch (error) {
    console.error("Error exporting PDF:", error);
    throw error;
  }
};
