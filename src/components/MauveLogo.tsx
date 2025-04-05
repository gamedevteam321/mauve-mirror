import React from 'react';

const MauveLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/images/logo.png" 
        alt="Mauve Logo" 
        className="h-14 w-auto"
      />
    </div>
  );
};

export default MauveLogo;
