import LangSwitch from "../components/LangSwitch";
import { ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "LangSwitch",
  component: LangSwitch,
} as ComponentMeta<typeof LangSwitch>;

export const Default = () => {
  const [lang, setLang] = useState<"en" | "cn">("en");
  return <LangSwitch lang={lang} setLang={setLang} />;
};
