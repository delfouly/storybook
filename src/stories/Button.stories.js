import Button from "../components/Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleCLick" } },
};

const Template = (args) => <Button {...args} />;
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: "blue",
  label: "Press Me",
  size: "lg",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
};
