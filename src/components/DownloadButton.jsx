export default function DownloadButton() {
  const handleDownload = () => {
    // Replace with your actual brochure file path
    const fileUrl = "/files/brochure.pdf"; 
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Brochure.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="relative flex items-center bg-black text-white font-medium px-6 py-2 pr-12"
    >
      Download
      <span className="absolute top-0 right-0 h-full w-6 bg-gray-400 -skew-x-12"></span>
    </button>
  );
}
