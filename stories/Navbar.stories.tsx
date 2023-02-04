import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = { withName: true };
