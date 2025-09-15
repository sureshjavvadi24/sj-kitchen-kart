import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex justify-between items-center p-4 mx-2">
        <div className="flex-shrink-0">
          <img
            src="data:image/png;base64,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"
            alt="Logo"
            className="w-12 h-auto"
          />
        </div>

        <div className="flex items-center gap-6 font-semibold">
          <button className="px-4 py-2 rounded hover:bg-gray-100 transition">
            Sign in
          </button>
          <div>0️⃣ Cart</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
