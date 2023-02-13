import { ComponentProps, FC, PropsWithChildren } from "react";

const TitleBar: FC<{ title: string; extra?: JSX.Element }> = ({
  title,
  extra,
}) => {
  return (
    <div className="w-full mb-4 flex justify-between items-center">
      <h3 className="text-lg font-medium">{title}</h3>
      {extra}
    </div>
  );
};

const AboutCard: FC<PropsWithChildren<{} & ComponentProps<typeof TitleBar>>> =
  ({ children, ...titleBarProps }) => {
    return (
      <div className=" bg-white mb-4 w-full px-5 pt-4 pb-8 rounded-xl">
        <TitleBar {...titleBarProps} />
        {children}
      </div>
    );
  };

export default AboutCard;
