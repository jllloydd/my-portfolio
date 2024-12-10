import React from "react";

export const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="font-bold text-2xl space-x-2">
        <span className="inline-block">{title}</span>
      </h1>
    </div>
  );
};
