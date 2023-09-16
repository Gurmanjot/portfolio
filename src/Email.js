import React from "react";

const EmailSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h2 className="mb-2 text-2xl font-bold">Get in Touch</h2>
      <a
        href="mailto:your-email@example.com"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        your-email@example.com
      </a>
    </div>
  );
};

export default EmailSection;
