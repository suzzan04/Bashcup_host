import React from "react";

type CircleIconProps = {
  icon: React.ReactNode;
  size: number;
};
const CircleIcon: React.FC<CircleIconProps> = ({ icon, size }) => {
  return (
    <div
      className={
        "p-2 rounded-full border border-brand flex items-center justify-center text-brand-text " +
        `size-${size ? size : 8}`
      }
    >
      {icon}
    </div>
  );
};

export default CircleIcon;
