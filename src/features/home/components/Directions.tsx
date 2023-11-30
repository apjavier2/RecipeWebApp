import React from "react";

export interface DirectionsProps {
  directions: any[];
}

export const Directions: React.FC<DirectionsProps> = ({ directions }) => {
  return (
    <div className="w-[65%] h-[10rem] pl-1">
      <div className="text-[1.25rem] uppercase tracking-wider font-medium mb-2">
        Directions
      </div>
      <ul className="list-disc pl-6">
        {directions.map((direction: any, index: number) => (
          <li key={index}>{direction.instructions}</li>
        ))}
      </ul>
    </div>
  );
};
