
import React from 'react';

const MauveLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/7957072c-d172-49fb-84cc-bbea76ab2f17.png" 
        alt="Mauve Story Logo" 
        className="h-12" 
      />
    </div>
  );
};

export default MauveLogo;
