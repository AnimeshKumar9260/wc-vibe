import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t mt-12" aria-label="Footer">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center justify-center">
        <span className="text-gray-600 text-sm text-center">
          &copy; {new Date().getFullYear()} WC. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
