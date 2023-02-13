import { ComponentProps, FC, HTMLProps } from "react";
import Image from "next/image";
import classNames from "classnames";

const SkillCard: FC<
  { title: string } & HTMLProps<HTMLDivElement> & ComponentProps<typeof Image>
> = ({ width, height, alt, src, title, ...divProps }) => {
  return (
    <div
      className={classNames(
        divProps.className,
        " flex pb-4 pl-3 flex-col justify-between rounded-xl h-[200px] w-[200px] "
      )}
    >
      <div className="flex h-full flex-1 justify-center items-center">
        <Image alt="" width={width} height={height} src={src} />
      </div>
      <div>
        <h4 className="text-white font-medium text-sm w-[80%] ">{title}</h4>
      </div>
    </div>
  );
};

export default SkillCard;
