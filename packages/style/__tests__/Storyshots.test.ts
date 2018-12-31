import initStoryshots from "@storybook/addon-storyshots";
import faker from "faker";

faker.seed(123);
initStoryshots({
  storyKindRegex: /^((?!.*?DontTest).)*$/
});
