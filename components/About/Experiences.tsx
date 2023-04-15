import { FC } from "react";
import AboutCard from "./AboutCard";
import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

const ExperienceItem: FC<{
  img: JSX.Element;
  company: string;
  position: string;
  duration: string;
  link?: string;
}> = ({ img, company, position, duration, link }) => {
  return (
    <div className="flex mb-4">
      <div className="w-[47px]">{img}</div>

      <div className="ml-3 w-full">
        <div className="flex items-center justify-between ">
          <h3 className="md:text-lg text-md font-medium">{company}</h3>
          <p className=" text-sm md:text-md text-gray-500">{duration}</p>
        </div>
        <p className=" mt-1 text-gray-500 text-sm md:text-mg">{position}</p>
        {link && (
          <a
            target="_blank"
            rel="noreferrer"
            className=" text-sm underline text-blue-500"
            href={link}
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};

const Experiences: FC = () => {
  return (
    <AboutCard title="Experiences">
      <ExperienceItem
        position="Design Engineer (React)"
        company="iMean"
        duration="2021 - Present"
        link="https://imean.tech"
        img={<Image width={47} height={44} src="/imean-logo.png" alt="" />}
      />

      <ExperienceItem
        position="Co-Founder (User Experience)"
        company="Teamer"
        duration="2019 - 2021"
        img={<Image width={47} height={47} src="/teamer-logo.png" alt="" />}
      />
    </AboutCard>
  );
};

export default Experiences;
