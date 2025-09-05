import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl text-slate-400 font-bold mb-4 fixed left-5 top-5 ">
        <span className="text-primary-base">Dept</span>Info
      </h1>
      {children}
    </div>
  );
};

export default layout;
