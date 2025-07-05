import React from "react";

const Header = () => {
  return (
    <header className="bg-[#F3F0E8] px-4 md:px-8 lg:px-16 py-6">
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 border border-[#8b7355] flex items-center justify-center">
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 border-t border-l border-[#8b7355]"></div>
              <div className="absolute inset-0 border-b border-r border-[#8b7355] transform translate-x-2 translate-y-2"></div>
            </div>
          </div>
          <div>
            <h1 className="text-[#8b7355] text-lg font-serif leading-tight">
              Dr. Serena Blake, PsyD
            </h1>
            <p className="text-[#8b7355] text-sm font-serif">
              Clinical Psychology
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
