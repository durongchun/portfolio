// Page Not Found

function PageResume() {
  const handleDownload = () => {
    // Using the public URL
    const fileUrl = `${import.meta.env.PUBLIC_URL || ""}/Lucy_Resume.pdf`;

    // Create invisible anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Lucy_Resume.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main>
      <button
        onClick={handleDownload}
        className="download-button" // Add your styles
      >
        Download Resume
      </button>
    </main>
  );
}

export default PageResume;
