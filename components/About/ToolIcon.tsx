import { FC } from "react";

const ToolIcon: FC<{ bg?: string; icon: JSX.Element }> = ({ bg, icon }) => {
  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded-xl "
      style={{
        backgroundColor: bg || "#F2F2F2",
      }}
    >
      {icon}
    </div>
  );
};

export default ToolIcon;
