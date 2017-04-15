import { configure, addDecorator } from '@kadira/storybook';

addDecorator((story) => {
  return (story());
});

function loadStories() {
  require('../stories/Tipso');
}

configure(loadStories, module);
